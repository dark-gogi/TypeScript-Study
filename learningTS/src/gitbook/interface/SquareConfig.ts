/* 선택적 프로퍼티는 이름 끝에 ? 로 선언한다. 
 만약 선택적 프로퍼티가 아닌 프로퍼티가 명시되어 있다면 반드시 입력해야 함
 선택적 프로퍼티는 인터페이스 내에 선언되지 않은 프로퍼티에 대한 사용을 방지함
 */


interface SquareConfig{

    color? : string;
    width? : number;

}

function createSquare(config : SquareConfig) : { color : string, area : number }{

    let newSquare = {color : "white", area : 100};

    if(config.color){
        newSquare.color = config.color;
    }

    if(config.width){
        newSquare.area =  config.width * config.width;
    }

    return newSquare;
}


/*
    TypeScript 는 선언되지 않는 프로퍼티에 대한 초과 프로퍼티 검사를 수행함
    단, 객체 리터럴로 바로 초기화시키는 경우는 검사할 수 없음
    아래와 같이 함수로 넣는 경우에는 검사 가능
*/

let mySquare = createSquare({color : "black"});
/*
let mySquare = createSquare({colour : "black", width : 10}); 초과 프로퍼티 검사. Error
let mySquare = {colour : "black", width :10}; 이 경우 초과 프로퍼티 검사가 불가능

객체 리터럴을 통해 주입하지 말 것!!! 트랜스파일의 이점이 사라짐
*/



console.log(createSquare(mySquare));