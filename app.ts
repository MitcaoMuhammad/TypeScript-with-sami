import safeParse from 'safe-json-parse/callback'

const tuple1 = safeParse('{}')
const json = tuple1[1]

console.log(json)
