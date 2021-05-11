http=require('http');
server=http.createServer(handleRequest)
server.listen(3456,()=>{console.log("3456 port");})
function handleRequest(req,res){
    var store='';
    console.log(store);
req.on('data',(chunk)=>{
    console.log(chunk.toString());
    store+=chunk;
});
    
    req.on('end',()=>{
        res.write(store.toString())
    });
    res.end(store);
}