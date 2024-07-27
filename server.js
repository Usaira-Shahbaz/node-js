const ht = require('http');

const f = (req,resp)=>
{
    resp.write("<h1>Successfully, Created first server</h1>");
    
    resp.end();
}
ht.createServer(data).listen(4500);