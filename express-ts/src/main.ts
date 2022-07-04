// TypeScript 로 Express Node 서버 띄우기
//express 는 @Types 내의 express 디렉토리 내의 Types 를 당겨옴
// 없다면 node_modules 내의 모든 @Types 를 탐색 후 적용

import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('Hello Express with Typescript');
});

app.listen(3000, () => {
    console.log("Port 3000 is Now Running with Express & TypeScript");
});