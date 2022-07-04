"use strict";
// TypeScript 로 Express Node 서버 띄우기
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello Express with Typescript');
});
app.listen(3000, () => {
    console.log("Port 3000 is Now Running with Express & TypeScript");
});
