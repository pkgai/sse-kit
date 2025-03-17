# pkgai-sse-kit

[SSE](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events) 工具集

## sse-parser

SSE 解析器

```ts
import { response } from '@pkgai/sse-parser'

const res =await fetch('https://openai-like/v1/chat/completions',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer {API_KEY}',
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
  })
})

for await (const chunk of response(res)) {
  console.log(chunk)
  // data: 
  console.log(chunk.data)
  // event:
  console.log(chunk.event)
}
```
