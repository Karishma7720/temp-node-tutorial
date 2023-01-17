const http = require('http')

const server = http.createServer((req , res) =>{
    if (req.url === '/') {

    res.end('Hello this first http module')}

    if (req.url === '/about ') {

        res.end('Hello this about page of  http module')}
        
    res.end(`

    <h1> OOps ! </h1>
    <p> We are unable to find the page </p>

    <a href='./' > Back Home </a>
    
    `)
})

server.listen(3000)