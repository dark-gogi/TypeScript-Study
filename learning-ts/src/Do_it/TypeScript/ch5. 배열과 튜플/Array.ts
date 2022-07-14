
// 별 다른 배열 길이를 선언해주지 않는다면 push 를 통해 동적으로 배열 요소를 넣어줄 수 있음
// JavaScript 의 배열은 Java/C# 과 다르게 Array 클래스의 인스턴스를 생성한다

let intArr : number[] = new Array();

for(let i : number = 0; i < 10; i++){
    intArr.push(i);
}

document.write(intArr.toString());

