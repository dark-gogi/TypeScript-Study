// TypeScript 가 아닌 Vanilla Javascript 로 Express Node 서버 띄우기

const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send('hello js');
});

app.listen(3000, () => {
    console.log('port 3000 now listening');
});