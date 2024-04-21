//node server.js
//npm install --save--dev 
//npm run dev
//npm install -g nodemon
const http=require('http');// import http module
const PORT=8000;
//Webサーバーを作る
const html =require("fs").readFileSync("./index.html");

const server =http.createServer((req,res)=>{
    //ブラウザからアクセスが来た時の処理
    res.writeHead(200,{"Content-Type":"text/html"});//レスポンスのヘッダー
    res.write(html);//レスポンスの内容
    res.end();//レスポンスの終了
});

server.listen(PORT,()=>{
    console.log("Server is running!");
});
