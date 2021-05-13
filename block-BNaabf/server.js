//move one directory up
relativePath=`../client/index.js`;
//move one directory up and change folders
absPath=path.join(__dirname,'..','client/index.js')//second parameter is how up should you go.>one level up >..

var http=require('http')
var fs=require('fs')
var qs=require('querystring')
server=http.createServer(handleReqest);
server.listen(4000)
function handleReqest(req,res){
    store='';
    req.on('data',(chunk)=>{
        store+=chunk;
    })
    req.on('end',()=>{
        if(req.url==`/form`&&req.method=='GET'){
            res.setHeader(`Content-Type`,'text/html')
            fs.createReadStream('./form.html').pipe(res);
        }
        if(req.url==`/action`&&req.method=='POST'){
            parsedData=qs.parse(store);
            res.setHeader(`Content-Type`,'text/html')
            res.end(`name:${parsedData.name}`)
        }
    })





}





