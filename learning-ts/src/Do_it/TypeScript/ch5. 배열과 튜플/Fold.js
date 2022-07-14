"use strict";
exports.__esModule = true;
exports.fold = void 0;
/*
    array : fold 할 배열
    callback : fold 를 구현할 함수
    initValue : fold 된 값의 초기화
*/
var fold = function (array, callback, initValue) {
    var result = initValue;
    for (var iterator = 0; iterator < array.length; ++iterator) {
        var value = array[iterator];
        result = callback(result, value);
    }
    return result;
};
exports.fold = fold;
