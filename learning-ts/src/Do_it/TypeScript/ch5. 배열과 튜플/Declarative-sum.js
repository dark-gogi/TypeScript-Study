"use strict";
exports.__esModule = true;
var Fold_1 = require("./Fold");
var Range_1 = require("./Range");
// Recursion 하게 배열을 반환
var numbers = (0, Range_1.range)(1, 100 + 1);
var result = (0, Fold_1.fold)(numbers, function (result, value) { return result + value; }, 0);
console.log(result);
