import { type AsyncIterableStream, asyncIterableStream } from '../helper'
import { EventSourceStream } from '../parse'
import type { EventSourceMessage } from '../types'

/**
 * 转换 ReadableStream 为 可异步迭代的 sse 数据
 * @param stream
 * @returns
 */
export function readableStreamToSSE(
  stream: ReadableStream<Uint8Array>
): AsyncIterableStream<EventSourceMessage> {
  return asyncIterableStream(stream.pipeThrough(new EventSourceStream()))
}
