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

//req.headers['content-type']   based on this we know what type of data is recieved
//use if ==='application/x-www-form-urlencoded'> Q=url.parse(STORE).QUERY;NAME=Q.KEY1
//else res.end(store)

if(req.header['content-type']=='application/json'){
    dataJson=JSON.parse(store);
    res.writeHeader(200,'Content-Type:text/html')
    res.end(`email:${dataJson.email}`)
}
//for form data use url.parse(req.url).querystring.name