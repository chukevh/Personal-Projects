const EventEmitter = require('events')
const customEmitter = new EventEmitter()
// created new emitter and passed start condition
customEmitter.on('start', () => {
    console.log('customEmitter started')
})
// console logs emit on start
customEmitter.emit('start')

// new emitter 
const numberEmitter = new EventEmitter()
// prints number when event is triggered
numberEmitter.on('number', (number) => {
    console.log(`Started with number ${number}`)
})

numberEmitter.emit('number', 50)

numberEmitter.on('error', (err) => {
    // will crash system
    // console.error(err)
    console.error('whoops there was an error')
    
})
numberEmitter.emit('error', new Error('whoops!'))

// asynchronous event emitter
const myEmitter = new EventEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

