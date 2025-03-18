# @pkgai/fetch-sse

<!-- automd:badges color="orange" license licenseBranch  bundlephobia packagephobia name="@pkgai/fetch-sse" -->

[![npm version](https://img.shields.io/npm/v/@pkgai/fetch-sse?color=orange)](https://npmjs.com/package/@pkgai/fetch-sse)
[![npm downloads](https://img.shields.io/npm/dm/@pkgai/fetch-sse?color=orange)](https://npm.chart.dev/@pkgai/fetch-sse)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@pkgai/fetch-sse?color=orange)](https://bundlephobia.com/package/@pkgai/fetch-sse)
[![install size](https://badgen.net/packagephobia/install/@pkgai/fetch-sse?color=orange)](https://packagephobia.com/result?p=@pkgai/fetch-sse)
[![license](https://img.shields.io/github/license/pkgai/sse-kit?color=orange)](https://github.com/pkgai/sse-kit/blob/true/LICENSE)

<!-- /automd -->

[EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) `fetch` 实现版

## 安装

<!-- automd:pm-install name="@pkgai/fetch-sse" -->

```sh
# ✨ Auto-detect
npx nypm install @pkgai/fetch-sse

# npm
npm install @pkgai/fetch-sse

# yarn
yarn add @pkgai/fetch-sse

# pnpm
pnpm install @pkgai/fetch-sse

# bun
bun install @pkgai/fetch-sse

# deno
deno install @pkgai/fetch-sse
```

<!-- /automd -->

## 简单使用

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
<!-- automd:contributors author="Colourlessglow" license="MIT"  -->

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
