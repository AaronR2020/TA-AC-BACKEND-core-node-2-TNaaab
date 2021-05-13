//fs=require('fs');
//fs.join(__dirname,"./app.js") //absolute path to app.j
//fs.join(__dirname,"./index.js")//absolute path to index
console.log(__filename);//absolute path
console.log(__dirname + '/app.js');//path to app.js
console.log('./index.html');//relative path


//Capture Data on server.
http=require('http');
//for form data
qs=require('querystring')//or just use url.parse
server=http.createSever(handleRequest)
server.listen(3000);
function handleRequest(req,res){
if(req.method=='POST'&&req.url=='./'){
    store="";//keys.toString()
    req.on('data',(chunks)=>{
        store+=chunks;
        //for a form data, chunk is in a url state> in that case use queryString
    }).on('end',()=>{
        res.status=200;
        res.end(store);
        //for form
        q=url.parse(req.url).querystring
        console.log(q.key1)
    })
}
}

