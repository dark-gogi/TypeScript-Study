"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonInstance = void 0;
let MAX_AGE = 100;
class PersonImpl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.default = PersonImpl;
function getRandomNumber(max = MAX_AGE) {
    return Math.ceil((Math.random() * max));
}
/* 객체 타입으로 반환하는 변수
    export const PersonInstance = (name : string, age : number = getRandomNumber()) : PersonImpl => ({name, age});
*/
// 화살표 함수를 사용하여 PersonImpl 객체 반환
const getPersonInstance = (name, age = getRandomNumber()) => ({ name, age });
exports.getPersonInstance = getPersonInstance;
