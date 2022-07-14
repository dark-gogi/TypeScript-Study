class UserEntity{

    userName : string;
    userAge : number;
    userEmail : string;
    userAuth : Authority;

    constructor(userName : string, userAge : number, userEmail : string, userAuth : Authority){

        this.userName = userName;
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.userAuth = userAuth;
    }

}
