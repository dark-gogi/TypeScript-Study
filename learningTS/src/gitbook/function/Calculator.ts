class Calculator{

    constructor(){};
    
    add(a : number, b : number) : number{
        return a+b;
    };
}


/*
    (x: number, y : number) => number 는 add 객체가
    number 파라미터 두 개를 입력받고 number 를 반환하는
    함수 타입임을 정의하는 것
    이하는 익명 함수를 구현
*/
let add : (x : number, y : number) => number = 
    function(x : number, y : number) : number {
            return x+y;
    };