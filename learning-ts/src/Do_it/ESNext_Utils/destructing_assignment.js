// destructing assignment : 비구조화 할당

// 객체에 대한 비구조화 할당
let person = {name : 'jane', age : 22};
let {name, age} = person;

// 배열에 대한 비구조화 할당
let array = [1,2,3,4];
let [head, ...rest] = array;

// 변수에 대한 비구조화 할당
let a = 1, b = 2;
[a,b] = [b,a];