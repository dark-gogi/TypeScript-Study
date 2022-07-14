import PersonImpl, { getPersonInstance } from "./PersonImpl";


const testPerson = () : void => {
    let jane : PersonImpl = getPersonInstance('Jane');
    let jack : PersonImpl = getPersonInstance('Jack');

    console.log(jane, jack);
};


testPerson();