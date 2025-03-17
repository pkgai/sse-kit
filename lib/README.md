# @pkgai/sse-parser

<!-- automd:badges color="orange" license licenseBranch  bundlephobia packagephobia name="@pkgai/sse-parser" -->

[![npm version](https://img.shields.io/npm/v/@pkgai/sse-parser?color=orange)](https://npmjs.com/package/@pkgai/sse-parser)
[![npm downloads](https://img.shields.io/npm/dm/@pkgai/sse-parser?color=orange)](https://npm.chart.dev/@pkgai/sse-parser)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@pkgai/sse-parser?color=orange)](https://bundlephobia.com/package/@pkgai/sse-parser)
[![install size](https://badgen.net/packagephobia/install/@pkgai/sse-parser?color=orange)](https://packagephobia.com/result?p=@pkgai/sse-parser)
[![license](https://img.shields.io/github/license/pkgai/sse-kit?color=orange)](https://github.com/pkgai/sse-kit/blob/true/LICENSE)

<!-- /automd -->

[SSE](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events) `EventStream` 数据解析器

## 安装

<!-- automd:pm-install name="@pkgai/sse-parser" -->

```sh
# ✨ Auto-detect
npx nypm install @pkgai/sse-parser

# npm
npm install @pkgai/sse-parser

# yarn
yarn add @pkgai/sse-parser

# pnpm
pnpm install @pkgai/sse-parser

# bun
bun install @pkgai/sse-parser

# deno
deno install @pkgai/sse-parser
```

<!-- /automd -->

## ReadableStream

```ts
import { readableStream } from '@pkgai/sse-parser'

const response =await fetch('https://openai-like/v1/chat/completions',{
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

for await (const chunk of readableStream(response.body!)) {
  console.log(chunk)
  // data: 
  console.log(chunk.data)
  // event:
  console.log(chunk.event)
}
```

## Response

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
