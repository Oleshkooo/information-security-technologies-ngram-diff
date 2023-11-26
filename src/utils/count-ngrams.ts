const sortMap = <K, V>(map: Map<K, V>, comparator: (a: [K, V], b: [K, V]) => number): Map<K, V> => {
    return new Map([...map.entries()].sort(comparator))
}

function trimMap<K, V>(map: Map<K, V>, count: number): Map<K, V> {
    if (count >= map.size) {
        return map
    }
    const trimmedEntries = [...map.entries()].slice(0, count)
    return new Map(trimmedEntries)
}

const countMonograms = (data: string): Map<string, number> => {
    const monogramCountMap = new Map<string, number>()
    for (const char of data) {
        if (monogramCountMap.has(char)) {
            monogramCountMap.set(char, monogramCountMap.get(char)! + 1)
        } else {
            monogramCountMap.set(char, 1)
        }
    }
    monogramCountMap.delete('\n')
    monogramCountMap.delete('\r')
    return monogramCountMap
}

const countBigrams = (data: string): Map<string, number> => {
    const bigramCountMap = new Map<string, number>()
    for (let i = 0; i < data.length - 1; i++) {
        const bigram = data.slice(i, i + 2)
        if (bigramCountMap.has(bigram)) {
            bigramCountMap.set(bigram, bigramCountMap.get(bigram)! + 1)
        } else {
            bigramCountMap.set(bigram, 1)
        }
    }
    return bigramCountMap
}

const countTrigrams = (data: string): Map<string, number> => {
    const trigramCountMap = new Map<string, number>()
    for (let i = 0; i < data.length - 2; i++) {
        const trigram = data.slice(i, i + 3)
        if (trigramCountMap.has(trigram)) {
            trigramCountMap.set(trigram, trigramCountMap.get(trigram)! + 1)
        } else {
            trigramCountMap.set(trigram, 1)
        }
    }
    return trigramCountMap
}

const countQuadrigrams = (data: string): Map<string, number> => {
    const quadrigramCountMap = new Map<string, number>()
    for (let i = 0; i < data.length - 3; i++) {
        const quadrigram = data.slice(i, i + 4)
        if (quadrigramCountMap.has(quadrigram)) {
            quadrigramCountMap.set(quadrigram, quadrigramCountMap.get(quadrigram)! + 1)
        } else {
            quadrigramCountMap.set(quadrigram, 1)
        }
    }
    return quadrigramCountMap
}

export const countNgrams = (data: string) => {
    // const monograms = trimMap(
    //     sortMap(countMonograms(data), (a, b) => b[1] - a[1]),
    //     5,
    // )

    const bigrams = trimMap(
        sortMap(countBigrams(data), (a, b) => b[1] - a[1]),
        5,
    )

    const trigrams = trimMap(
        sortMap(countTrigrams(data), (a, b) => b[1] - a[1]),
        5,
    )

    const quadrigrams = trimMap(
        sortMap(countQuadrigrams(data), (a, b) => b[1] - a[1]),
        5,
    )

    return {
        // monograms,
        bigrams,
        trigrams,
        quadrigrams,
    }
}
