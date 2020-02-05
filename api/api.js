const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    //console.log(req);
    res.send('Simple REST API');
});
app.post('/api/v1/add', (req, res) => {
    //クライアントからの送信データを取得する 
    //モールス信号の変換関数
    plain=req.body.text;
    trans=translator(plain);
    response={text:trans};
    res.json(response);
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

function translator(plain_text){
    var return_text="";
    for(i=0,j=plain_text.length;i<j;i++){
        //ア行
        if(plain_text[i]=="あ"){
        return_text+="－－・－－";
        }
        else if(plain_text[i]=="い"){
        return_text+="・－－";
        }
        else if(plain_text[i]=="う"){
            return_text+="・・－";
        }
        else if(plain_text[i]=="え"){
            return_text+="－・－－－";
        }
        else if(plain_text[i]=="お"){
            return_text+="・－・・・";
        }
        //カ行
        else if(plain_text[i]=="か"){
            return_text+="・－・・";
        }
        else if(plain_text[i]=="き"){
            return_text+="－・－・・";
        }
        else if(plain_text[i]=="く"){
            return_text+="・・・－";
        }
        else if(plain_text[i]=="け"){
            return_text+="－・－－";
        }
        else if(plain_text[i]=="こ"){
            return_text+="－－－－";
        }
        //サ行
        else if(plain_text[i]=="さ"){
            return_text+="－・－・－";
        }
        else if(plain_text[i]=="し"){
            return_text+="－－・－・";
        }
        else if(plain_text[i]=="す"){
            return_text+="・・－";
        }
        else if(plain_text[i]=="て"){
            return_text+="・－・－－";
        }
        else if(plain_text[i]=="そ"){
            return_text+="－－－・";
        }
        //タ行
        else if(plain_text[i]=="た"){
            return_text+="－・";
        }
        else if(plain_text[i]=="ち"){
            return_text+="・・－・";
        }
        else if(plain_text[i]=="つ"){
            return_text+="・－－・";
        }
        else if(plain_text[i]=="て"){
            return_text+="・－・－－";
        }
        else if(plain_text[i]=="と"){
            return_text+="・・－・・";
        }
        //ナ行
        else if(plain_text[i]=="な"){
            return_text+="・－・";
        }
        else if(plain_text[i]=="に"){
            return_text+="－・－・";
        }
        else if(plain_text[i]=="ぬ"){
            return_text+="・・・・";
        }
        else if(plain_text[i]=="ね"){
            return_text+="－－・－";
        }
        else if(plain_text[i]=="の"){
            return_text+="・・－－";
        }
        //ハ行
        else if(plain_text[i]=="は"){
            return_text+="－・・・";
        }
        else if(plain_text[i]=="ひ"){
            return_text+="－－・・－";
        }
        else if(plain_text[i]=="ふ"){
            return_text+="－－・・";
        }
        else if(plain_text[i]=="へ"){
            return_text+="・";
        }
        else if(plain_text[i]=="ほ"){
            return_text+="－・・";
        }
        //マ行
        else if(plain_text[i]=="ま"){
            return_text+="－・・－";
        }
        else if(plain_text[i]=="み"){
            return_text+="・・－・－";
        }
        else if(plain_text[i]=="む"){
            return_text+="―";
        }
        else if(plain_text[i]=="め"){
            return_text+="－・・・－";
        }
        else if(plain_text[i]=="も"){
            return_text+="－・・－・";
        }
        //ヤ行
        else if(plain_text[i]=="や"){
            return_text+="・－－";
        }
        else if(plain_text[i]=="ゆ"){
            return_text+="－・・－－";
        }
        else if(plain_text[i]=="よ"){
            return_text+="－－";
        }
        //ラ行
        else if(plain_text[i]=="ら"){
            return_text+="・・・";
        }
        else if(plain_text[i]=="り"){
            return_text+="－－・";
        }
        else if(plain_text[i]=="る"){
            return_text+="－・－－・";
        }
        else if(plain_text[i]=="れ"){
            return_text+="－－－";
        }
        else if(plain_text[i]=="ろ"){
            return_text+="－・－・";
        }
        //ワ行
        else if(plain_text[i]=="わ"){
            return_text+="－・－";
        }
        else if(plain_text[i]=="を"){
            return_text+="・－－－";
        }
        else if(plain_text[i]=="ん"){
            return_text+="・－・－・";
        }
        else //認識できない文字の受信
        return "wrong_text"

    }
return return_text;
}