
/*
range 함수는 재귀적으로 동작하여 from 부터 to 까지의 수로 구성된 배열 반환
*/
export const range = (from : number , to : number) : number[] =>
 from < to ? [from, ...range(from + 1, to)] : [];