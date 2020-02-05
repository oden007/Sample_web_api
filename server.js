var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7002;
const fetch = require("node-fetch");

app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('sound'));
//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended:true}));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// fetch('http://localhost:3001', {//API呼び出し
// method: 'GET', // POSTメソッドで送信する,
// headers: {
//   "Content-Type": "application/json; charset=utf-8",
//   // "Content-Type": "application/x-www-form-urlencoded",
// }}).then((response) => {
//     if(response.ok) { // ステータスがokならば
//       return response.text(); // レスポンスをテキストとして変換する
//     } else {
//       throw new Error();
//     }
//   })
//   .then((text) => console.log("return_text:"+text))
//   .catch((error) => console.log(error)
//   );
// fetch('http://localhost:3001/api/v1/add')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });

app.get('/' , function(req, res){
    //var socket = io.connect("http://localhost:3000");
    res.sendFile(__dirname+'/signal.html');
    //res.sendFile(__dirname+'/time_count.js');
});

app.post('/test/req' , function(req, res){
  console.log("client:"+req.body.text);
  //client_message=req.body.text;
  //api_data={text:client_message};
  api_data=req.body;
  api_data=JSON.stringify(api_data);
  fetch('http://localhost:3001/api/v1/add', {//API呼び出し
  method: 'POST', // POSTメソッドで送信する,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // "Content-Type": "application/x-www-form-urlencoded",
},body:api_data
}).then((response) => response.json())
.then((json) => {
message=JSON.stringify(json);
message=JSON.parse(message);
console.log(message);
res.send(message);
})
.catch((error) => console.log(error));
}
);
http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
  });
