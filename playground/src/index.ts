import fs from 'node:fs/promises'
import { responseToSSE } from '@pkgai/sse-parser'

process.loadEnvFile('./.env')
const res = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.API_KEY,
  },
  body: JSON.stringify({
    model: 'qwq-32b',
    messages: [
      {
        role: 'user',
        content: '9.9和9.11谁大',
      },
    ],
    stream: true,
    stream_options: {
      include_usage: true,
    },
  }),
})

const sse = responseToSSE(res)

const json: any[] = []
for await (const chunk of sse) {
  console.log(chunk)
  json.push(chunk)
}
await fs.writeFile('./sse.json', JSON.stringify(json, null, 2))
process.exit(0)
export {}
