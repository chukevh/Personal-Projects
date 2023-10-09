const EventEmitter = require('events')
const express = require('express')

const eventEmitter = new EventEmitter();

const app = express();
app.set('eventEmitter', eventEmitter);

// access it from any module of the application
console.log(app.get('eventEmitter'));