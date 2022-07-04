/*

    TypeScript 는 모든 매개변수가 필요하다고 가정
    함수가 호출될 때, 트랜스파일러는 각 매개변수에 대해 사용자가 값과 수를
    제공했는지를 검사
    파라미터에 ? 를 붙여 선택적 매개변수로 정의할 수 있음
    선택적 매개변수는 반드시 필수 매개변수 뒤에 와야 함
*/


/*
    lastName 은 선택적 매개변수
    TypeScript 에서는 선택적으로 사용하더라도 반드시 매개변수 정의가 필요
*/
function buildName(firstName : string, lastName? : string) : string{
    if(lastName)
        return `${firstName} + " " + ${lastName}`;

    else
        return firstName;
}

/*
    TypeScript 는 매개변수에 값을 대입함으로써 초기화를 할 수 있음
    이를 기본-초기화 매개변수라 함
    아래 lastName 은 undefined 의 경우 BACK 으로 초기화됨을 알림
    모든 기본-초기화 매개변수는 선택적 매개변수로 처리됨
*/

function buildName2(firstName : string, lastName = "BACK") : string{
    if(lastName)
        return `${firstName} + " " + ${lastName}`;

    else
        return firstName;
}

/*
    나머지 매개변수
    함수의 정의 결과, 매개변수의 갯수가 얼마나 될 지 모를 때 사용
    선택적 매개변수의 무한으로 구현
 */


function buildName3(firstName : string, ...restOfName : string[]){

    return `${firstName} ${restOfName.join(" ")}`;

}

let employee = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employee);