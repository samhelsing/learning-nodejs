const {readFileSync, writeFileSync} = require('fs')
const firstfile = readFileSync('./content/first.txt', 'utf8')
const secondfile = readFileSync('./content/second.txt', 'utf8')
console.log(firstfile)
console.log(secondfile)

writeFileSync(
    './content/sync.txt',
    `yes you are in: `,
    {flag: 'a'}
)