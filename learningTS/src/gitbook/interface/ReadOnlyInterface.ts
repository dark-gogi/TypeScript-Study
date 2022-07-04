// ReadOnly Property 는 초기화 이후 재할당이 금지된 프로퍼티

interface ReadOnlyInterface{

    readonly x : number;
    readonly y : number;

}

let r1 : ReadOnlyInterface = {x : 10,y : 10};

// r1.x = 100; readonly 는 재할당 금지. 읽기만 가능