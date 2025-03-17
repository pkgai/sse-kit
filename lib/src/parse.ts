import { getLines, getMessages } from './_parse'
import type { EventSourceMessage } from './types'

export class EventSourceStream extends TransformStream<Uint8Array, EventSourceMessage> {
  constructor() {
    super({
      transform(chunk, controller) {
        const lineDecode = getLines(
          getMessages((message) => {
            controller.enqueue(message)
          })
        )
        lineDecode(chunk)
      },
    })
  }
}
