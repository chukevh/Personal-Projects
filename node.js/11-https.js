const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to my home page')
        return
    }
    if (req.url === '/about') {
        res.end('Here is the about page')
        return
    }   
    res.end(`
    <h1>Oops!</h1>
    <p>Seems like you've reached the wrong page</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)


// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/') {
//         res.end('Homepage')
//     }
//     if(req.url === '/about') {
//         res.end('About Page')
//     }
//     res.end('Error Page')
// })

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000')
// })