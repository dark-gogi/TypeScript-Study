/*
    ADT 란, Abstract Data Type 을 의미하기도 하지만,
    대수 타입(Algebraic Data Type) 이라는 의미로도 사용

    대수 타입이란, 다른 자료형의 값을 가지는 자료형을 의미

    대수 타입에는 합집합(union) 과 교집합(intersaction) 타입이 있음

    union 은 | 를, 교집합은 & 기호를 사용해 결합하여 타입을 사용할 수 있음

    즉, 대수 타입은 집합 형태의 타입이라 볼 수 있다
    (structual typing : 구조적인 타입)
*/

// union type과 intersaction type 을 정의
type NumberOrString =  number | string;
type NumberAndString = number & string;

