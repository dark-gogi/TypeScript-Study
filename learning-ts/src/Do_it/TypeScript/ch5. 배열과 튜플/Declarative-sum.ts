import { fold } from "./Fold";
import { range } from "./Range";

// Recursion 하게 배열을 반환
let numbers : number[] = range(1, 100+1);


let result : number = fold(numbers, (result, value) => result + value , 0);

console.log(result);