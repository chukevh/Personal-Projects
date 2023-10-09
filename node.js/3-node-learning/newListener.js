const EventEmitter = require('events')
const customEmitter = new EventEmitter()
// new listener always called when emitting
customEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
      // Insert a new listener in front
      customEmitter.on('event', () => {
        console.log('B');
      });
    }
});
customEmitter.once('event', () => {
    console.log('A');
});

customEmitter.emit('event')



