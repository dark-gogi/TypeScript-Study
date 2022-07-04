/*
    Index Signature 를 통해 색인화(Indexed) 할 수 있음
    Index Signature 를 지원하는 자료형은 String 과 Number 두가지

    두가지 타입을 지원하지만, 숫자 인덱서의 반환타입은 
    반드시 문자열 인덱서의 반환 타입의 하위 타입(SubType)이어야 함
    Number 로 인덱싱할 때, Javascript 는 실제로 객체를 인덱싱하기 전에
    String 으로 변환하기 때문
    즉, 100 으로 인덱싱한다는 것은 "100" 으로 인덱싱한다는 것과 같기 때문에
    서로 일관성이 있어야 함

*/

interface IndexableType{
    [index : number] : string;
}

let myArray : IndexableType = ["Apple", "Banana"];
let myString : string = myArray[0];

console.log(myString);