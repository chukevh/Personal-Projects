const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} is age ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`it's my bb erica`)
})

customEmitter.emit('response','erica',27)

// const http = require('http')

// const server = http.createServer()

// server.on('request', ()=>{
//     res.end('Welcome to my home page')
// })


// server.listen(5000)
