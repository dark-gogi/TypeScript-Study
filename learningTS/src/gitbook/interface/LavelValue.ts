interface LavelValue{
    label : string;
}

function printLabel(labelObject: LavelValue){

    console.log(labelObject.label);

}

let myObject = { size : 10, label : "Size 10 Object"};

printLabel(myObject);
