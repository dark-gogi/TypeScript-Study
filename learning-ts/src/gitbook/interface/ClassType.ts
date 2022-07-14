interface dfdf{
    createDate : Date;

    setDate(d : Date) : void;
}

class Dog implements dfdf{

    createDate : Date = new Date();

    constructor(h : number, m : number){ };

    setDate(d: Date): void {
        this.createDate = d;
    }

}


