import { type AsyncIterableStream, type EventSourceMessage, responseToSSE } from '@pkgai/sse-parser'

/**
 * Fetches an EventSource stream and returns an AsyncIterableStream of EventSourceMessage.
 * @param input
 * @param init
 * @returns
 */
export async function fetchSSE(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<AsyncIterableStream<EventSourceMessage>> {
  const response = await fetch(input, init)
  if (!response.ok) {
    throw new Error(`fetch error: ${response.status} ${response.statusText}`)
  }
  if (!response.body) {
    throw new Error('empty response body')
  }
  const contenttype = response.headers.get('content-type')
  if (!contenttype.startsWith('text/event-stream')) {
    throw new Error(
      `fetch error: expected content-type "text/event-stream" but received "${contenttype}"`
    )
  }
  return responseToSSE(response)
}

export { fetchSSE as fetchEventSource, fetchSSE as fetch }

export type { AsyncIterableStream, EventSourceMessage }
