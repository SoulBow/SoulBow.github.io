const serverOutput= document.getElementById("output");
const serverInput= document.getElementById("input");
var http= require('https://soulbow.github.io/indexComment.html');
http.createServer= (function(req, res){
res.writehead(200, {'content-type' : 'text/plain'});
res.end();}).listen("http");
function postIt(){serverOutput.innerHTML= "Diary Date X: " + serverInput.value;
serverInput="";}
