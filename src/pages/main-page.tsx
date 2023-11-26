import { TypographyList } from 'components/typography/list'
import { TypographyMuted } from 'components/typography/muted'
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { Textarea } from 'components/ui/textarea'
import { memo, useMemo, useState } from 'react'
import { compareNgrams } from 'utils/compare-ngrams'
import { countNgrams } from 'utils/count-ngrams'

interface MainPageProps {}
export const MainPage: React.FC<MainPageProps> = memo(() => {
    const [otGram, setOtGram] = useState<string>('')
    const [otGramText, setOtGramText] = useState<string>('')

    const [etGram, setEtGram] = useState<string>('')
    const [etGramText, setEtGramText] = useState<string>('')

    const { otGramHighlighted, etGramHighlighted, matchIndex } = useMemo(() => {
        return compareNgrams(otGram, otGramText, etGram, etGramText)
    }, [otGram, otGramText, etGram, etGramText])

    const otGramsCounts = useMemo(() => {
        return countNgrams(otGramText)
    }, [otGramText])

    const etGramsCounts = useMemo(() => {
        return countNgrams(etGramText)
    }, [etGramText])

    return (
        <div className="grid grid-cols-2 gap-5">
            <Card>
                <CardHeader>
                    <CardTitle>OT (open text)</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <Label>Text</Label>
                    <Textarea
                        value={otGramText}
                        onChange={e =>
                            setOtGramText(
                                e.target.value
                                    .split('')
                                    .filter(x => x !== '\n' && x !== '\r')
                                    .join(''),
                            )
                        }
                        placeholder="Lorem ipsum dolor sit amet"
                    />

                    <div className="my-2" />

                    <Label>N-gram</Label>
                    <Input value={otGram} onChange={e => setOtGram(e.target.value)} placeholder="ASD" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>ET (encrypted text)</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2">
                    <Label>Text</Label>
                    <Textarea
                        value={etGramText}
                        onChange={e =>
                            setEtGramText(
                                e.target.value
                                    .split('')
                                    .filter(x => x !== '\n' && x !== '\r')
                                    .join(''),
                            )
                        }
                        placeholder="Lorem ipsum dolor sit amet"
                    />

                    <div className="my-2" />

                    <Label>N-gram</Label>
                    <Input value={etGram} onChange={e => setEtGram(e.target.value)} placeholder="QWE" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>OT</CardTitle>
                </CardHeader>
                <CardContent className="break-all">{otGramHighlighted}</CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>ET</CardTitle>
                </CardHeader>
                <CardContent className="break-all">{etGramHighlighted}</CardContent>
            </Card>

            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>
                        Matching index: <span className="text-blue-500">{Math.round(matchIndex)}%</span>
                    </CardTitle>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>N-grams (OT)</CardTitle>
                </CardHeader>
                <CardContent>
                    {Object.entries(otGramsCounts).map(([key, value]) => {
                        const arr = Array.from(value, ([name, value]) => ({ name, value }))
                        return (
                            <>
                                <TypographyMuted className="capitalize">{key}:</TypographyMuted>
                                <TypographyList>
                                    {arr.map(item => (
                                        <li onClick={() => setOtGram(item.name)} className="cursor-pointer">
                                            "{item.name}" ({item.value})
                                        </li>
                                    ))}
                                </TypographyList>
                            </>
                        )
                    })}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>N-grams (ET)</CardTitle>
                </CardHeader>
                <CardContent>
                    {Object.entries(etGramsCounts).map(([key, value]) => {
                        const arr = Array.from(value, ([name, value]) => ({ name, value }))
                        return (
                            <>
                                <TypographyMuted className="capitalize">{key}:</TypographyMuted>
                                <TypographyList>
                                    {arr.map(item => (
                                        <li onClick={() => setEtGram(item.name)} className="cursor-pointer">
                                            "{item.name}" ({item.value})
                                        </li>
                                    ))}
                                </TypographyList>
                            </>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
})
MainPage.displayName = 'MainPage'
