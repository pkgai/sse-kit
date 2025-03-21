import type { AsyncIterableStream } from '../helper'
import type { EventSourceMessage } from '../types'
import { readableStreamToSSE } from './readableStream'

/**
 * 转换 Response 为 可异步迭代的 sse 数据
 * @param response
 * @returns
 */
export function responseToSSE(response: Response): AsyncIterableStream<EventSourceMessage> {
  return readableStreamToSSE(response.body!)
}
