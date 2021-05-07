const http = require('http')
const port = 3000

const server = http.createServer((req,res)=>{
  if(req.url == '/' ){
    res.write('Menggunakan http Module')
    res.end();
  }
  
})

server.listen(port)
