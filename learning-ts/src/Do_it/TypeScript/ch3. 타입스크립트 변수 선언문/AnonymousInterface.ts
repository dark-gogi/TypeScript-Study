function print(object : {name : string, age : number, etc? : boolean}) : void {

    console.log(
        object.etc ?
        `NAME : ${object.name} AGE : ${object.age} ETC : ${object.etc}` :
        `NAME : ${object.name} AGE : ${object.age}`
    )
}

// 개체 리터럴은 알려진 속성을 명시해야만 함 {'BACK', 32, true} 는 추론할 수 없음
let object1 : {name : string, age : number, etc : boolean} = {name : 'Back', age : 32, etc :true};

print(object1);


