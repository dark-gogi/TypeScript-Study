/*
    ESNEXT 에서는 ES5 에서의 비동기 콜백 함수를 좀 더 쉽게 구현할 수 있도록
    Promise 를 지원
    Browser 와 NodeJS 모두 지원하는 객체

    async 는 함수 수정자(function modifier) 로
    async 로 정의한 함수는 await 키워드를 사용할 수 있음

    await 는 Promise 객체를 해소(reslove) 해 줌

    아래의 예는 get() 함수가 [1,2,3,4,5] 를 Promise 객체로 반환
    get() 이 반환한 Promise 객체는 then() 메소드를 호출하여 그 값을 얻을 수 있음
*/

async function get(){
    let values = [];

    values.push(await Promise.resolve(1));
    values.push(await Promise.resolve(2));
    values.push(await Promise.resolve(3));
    values.push(await Promise.resolve(4));
    values.push(await Promise.resolve(5));

    return values;
}

get().then(values => console.log(values));