class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} logged In`);
    }
    
    // Will not give permisiion to access this method
    static createID(){
        return `123`
    }
}

const user1 = new User("Milan")
// console.log(user1.createID());

class Teacher extends User{
    constructor (username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createID());