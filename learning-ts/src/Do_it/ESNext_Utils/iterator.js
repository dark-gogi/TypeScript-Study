/*
    yield 문은 반복기(iterator) 를 생성할 때 사용
    반복기는 독립적으로 존재하지 않고 반복기 제공자(iterable) 을 통해 획득
    이처럼 yield 문을 통해 반복기를 만들어 내는 반복기 제공자를 생성기(generator) 라 함
    genarator function 은 function* 키워드와 yield* 키워드를 통해 정의
    yield 는 반드시 function* 으로 만들어진 함수 내부에서만 사용가능
*/

function* generator(){
    yield* [1,2];
}

for(let value of generator()){
    console.log(value);
}