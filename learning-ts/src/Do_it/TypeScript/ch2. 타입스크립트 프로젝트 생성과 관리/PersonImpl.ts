import Person from "./Person";


let MAX_AGE : number = 100;

export default class PersonImpl implements Person{
    constructor(public name : string, public age : number){}
}

function getRandomNumber(max : number = MAX_AGE) : number{
    return Math.ceil((Math.random()*max));
}


/* 객체 타입으로 반환하는 변수 
    export const PersonInstance = (name : string, age : number = getRandomNumber()) : PersonImpl => ({name, age});
*/

// 화살표 함수를 사용하여 PersonImpl 객체 반환
export const getPersonInstance  =
 (name : string, age : number = getRandomNumber()) : PersonImpl => ({name, age});

