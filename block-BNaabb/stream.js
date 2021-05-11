http=require('http');
server=http.createServer(handleRequest)
server.listen(3456,()=>{console.log("3456 port");})
function handleRequest(req,res){
    if(req.method=='POST'&&req.url=='/'){
        
    }
}