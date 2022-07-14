"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonImpl_1 = require("./PersonImpl");
const testPerson = () => {
    let jane = (0, PersonImpl_1.getPersonInstance)('Jane');
    let jack = (0, PersonImpl_1.getPersonInstance)('Jack');
    console.log(jane, jack);
};
testPerson();
