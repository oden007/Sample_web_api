//クライアント処理関数
var port=7002;//アクセスする
var data;
data={text:"てすと"};
//他のport番号にアクセスを行おうとするとCROSSポリシーに違反する
// fetch('http://localhost:3001/api/v1/add', {//API呼び出し
// method: 'POST', // POSTメソッドで送信する,
// headers: {
//   "Content-Type": "application/json; charset=utf-8",
//   // "Content-Type": "application/x-www-form-urlencoded",
// },body:data
// }).then((response) => response.json())
// .then((json) => {
// message=JSON.stringify(json);
// message=JSON.parse(message);
// console.log(message);
// res.send(message);
// })
// .catch((error) => console.log(error));

function send_data(){
  //文字列の確認
  input=document.getElementById("input").value;
  //console.log(input.match(/[あ-ん]+/).groups);
if(input==""){
alert("文字を入力して下さい");
}else{
 data={text:input};
 data=JSON.stringify(data);
fetch('http://localhost:'+port+'/test/req', {//サーバーに対するリクエスト
 method: 'POST', // POSTメソッドで送信する,
 headers: {'Accept': 'application/json',
   "Content-Type": "application/json; charset=utf-8"
   // "Content-Type": "application/x-www-form-urlencoded",
},body:data})
.then((response) => response.json())
.then((json) => {
message=JSON.stringify(json);
message = JSON.parse(message);
console.log(message);
if(message.text=="wrong_text"){
  alert("入力は平仮名のみで行ってください");
  document.getElementById("input").value="";
}

else
document.getElementById("output").value=message.text;

})
.catch((error) => console.log(error));
}

  }