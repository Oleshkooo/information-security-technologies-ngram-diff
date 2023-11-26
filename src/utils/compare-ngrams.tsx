interface HighlightMatches {
    [index: number]: 'match' | 'mismatch'
}

const highlightText = (text: string, ngram: string, matches: HighlightMatches) => {
    const elements: React.ReactNode[] = []
    let lastIndex = 0

    if (!ngram) return text

    for (let i = 0; i < text.length; i++) {
        if (matches[i]) {
            if (i !== lastIndex) {
                elements.push(text.substring(lastIndex, i))
            }
            elements.push(
                <span key={i} className={matches[i] === 'match' ? 'bg-green-500' : 'bg-red-500'}>
                    {text.substring(i, i + ngram.length)}
                </span>,
            )
            lastIndex = i + ngram.length
            i += ngram.length - 1
        }
    }

    if (lastIndex < text.length) {
        elements.push(text.substring(lastIndex))
    }

    return elements
}

export const compareNgrams = (otGram: string, otGramText: string, etGram: string, etGramText: string) => {
    const matchesOt: HighlightMatches = {}
    const matchesEt: HighlightMatches = {}
    let totalBigrams = 0
    let matchBigrams = 0

    if (!otGram || !etGram) return { otGramText, etGramText, matchIndex: 0 }

    for (let i = 0; i <= otGramText.length - otGram.length; i++) {
        const otSub = otGramText.substring(i, i + otGram.length)
        const etSub = etGramText.substring(i, i + etGram.length)

        if (otSub === otGram && etSub === etGram) {
            matchesOt[i] = 'match'
            matchesEt[i] = 'match'
            totalBigrams++
            matchBigrams++
        } else if (otSub === otGram || etSub === etGram) {
            matchesOt[i] = 'mismatch'
            matchesEt[i] = 'mismatch'
            totalBigrams++
        }
    }

    const matchIndex = totalBigrams > 0 ? (matchBigrams / totalBigrams) * 100 : 0

    const otGramHighlighted = highlightText(otGramText, otGram, matchesOt)
    const etGramHighlighted = highlightText(etGramText, etGram, matchesEt)

    return { otGramHighlighted, etGramHighlighted, matchIndex }
}
