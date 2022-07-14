"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.range = void 0;
/*
range 함수는 재귀적으로 동작하여 from 부터 to 까지의 수로 구성된 배열 반환
*/
var range = function (from, to) {
    return from < to ? __spreadArray([from], (0, exports.range)(from + 1, to), true) : [];
};
exports.range = range;
