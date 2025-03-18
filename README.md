# pkgai-sse-kit

[SSE](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events) 工具集

## sse-parser

[SSE](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events) `EventStream` 数据解析器

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

## fetch-sse

[EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) `fetch` 实现版

```ts
import { fetch } from '@pkgai/fetch-sse'

const response = await fetch('https://openai-like/v1/chat/completions',{
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

for await (const chunk of response) {
  console.log(chunk)
  // data: 
  console.log(chunk.data)
  // event:
  console.log(chunk.event)
}
```

## 贡献者
<!-- automd:contributors author="Colourlessglow" license="MIT" github="pkgai/sse-kit" -->

Published under the [MIT](https://github.com/pkgai/sse-kit/blob/main/LICENSE) license.
Made by [@Colourlessglow](https://github.com/Colourlessglow) and [community](https://github.com/pkgai/sse-kit/graphs/contributors) 💛
<br><br>
<a href="https://github.com/pkgai/sse-kit/graphs/contributors">
<img src="https://contrib.rocks/image?repo=pkgai/sse-kit" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
