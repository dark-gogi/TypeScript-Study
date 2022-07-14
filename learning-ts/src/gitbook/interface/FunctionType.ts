/* 
    interface 는 함수 타입을 설명할 수 있음
    여기서 FunctionType 은 string 파라미터 두개를 입력받고, 
    boolean 을 반환하는 함수 타입임을 알 수 있음
*/
interface FunctionType{
    (source : string, subString : string) : boolean;
}


// 파라미터의 타입은 문맥상 타이핑(Contextual Typing) 이 추론 가능하므로 생략가능
let functionType : FunctionType =  function( source : string, subString : string){

    let result  = source.search(subString);

    return result > -1;
};


