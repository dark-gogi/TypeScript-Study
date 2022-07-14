
// 함수 시그니처 생략, 반환 타입만 기재
let add = function(a : number, b : number) : number{
    return a + b;
}

// 함수 시그니쳐와 반환 타입 둘 다 기재
let add2 : ( a : number, b : number) => number = function(a,b){
    return a + b;
}
