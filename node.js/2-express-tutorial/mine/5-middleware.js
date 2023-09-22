const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res


// add middleware to all apps
// order matters
//app.use([logger, authorize])
app.use(morgan('tiny'))

// adds middleware
app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

app.get('/api/items', (req,res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})