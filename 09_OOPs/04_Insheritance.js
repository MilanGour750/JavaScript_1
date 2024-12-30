class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User Logged In with name ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email,subject){
        super(username);
        this.email = email;
        this.subject = subject;
    }
    addCourse(){
        console.log(`A new Subject was added by ${this.username}`);
    }
}

const userJI = new Teacher("Vaidik","vaidik@gmail.com","Java");
userJI.addCourse()
userJI.logMe()
const User2 = new User("Milan")
User2.logMe()

console.log(userJI === User2);

