const EventEmitter = require('events')
const customEmitter = new EventEmitter()

const callbackB = () => {
    console.log('B')
}

customEmitter.on('event', callbackB)

customEmitter.emit('event')
// removes listener
customEmitter.removeListener('event', callbackB)

