/*
    명령형 프로그래밍에서의 더하기는 for 문으로 처리
*/

let sum : number = 0;

for(let iterator : number = 1; iterator < 100+1;)
    sum += iterator++;

console.log(sum);