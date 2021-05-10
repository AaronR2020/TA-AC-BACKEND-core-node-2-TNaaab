http=require('http');
fs=require('fs');
server=http.createServer(handleRequest);
server.listen(3000,()=>{console.log("PORT:3000");})
function handleRequest(req,res){
    res.setHeader('Content-Type','text/html');
    fs.createReadStream('./readme.txt').pipe(res)
}