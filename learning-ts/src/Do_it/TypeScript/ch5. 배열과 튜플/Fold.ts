
/*
    array : fold 할 배열
    callback : fold 를 구현할 함수
    initValue : fold 된 값의 초기화
*/
export const fold = <T>(array : T[], callback : (result : T, val : T) => T,
 initValue : T) => {
    
    let result : T = initValue;

    for(let iterator : number = 0; iterator < array.length; ++iterator){
        const value : T = array[iterator];
        result = callback(result, value);
    }

    return result;
}