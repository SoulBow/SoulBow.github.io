const serverOutput= document.getElementById("output");
const serverInput= document.getElementById("input");
var http= require('http://localhost:6700/index.html');
http.createServer= (function(req, res){
res.writehead(200, {'content-type' : 'text/plain'});
res.end();}).listen("6700");
function postIt(){serverOutput.innerHTML= "Diary Date X: " + serverInput.value;
serverInput="";}
