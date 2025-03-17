import { type AsyncIterableStream, asyncIterableStream } from '../helper'
import { getLines, getMessages } from '../parse'
import type { EventSourceMessage } from '../types'

/**
 * 转换 ReadableStream 为 可异步迭代的 sse 数据
 * @param stream
 * @returns
 */
export function readableStreamToSSE(
  stream: ReadableStream<Uint8Array>
): AsyncIterableStream<EventSourceMessage> {
  return asyncIterableStream(
    stream.pipeThrough(
      new TransformStream({
        transform(chunk, controller) {
          const lineDecode = getLines(
            getMessages((message) => {
              controller.enqueue(message)
            })
          )
          lineDecode(chunk)
        },
      })
    )
  )
}
