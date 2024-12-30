// the concept of classes is introduced after es6 (ecmaScript6)

class User{
    constructor (username, email, password){
         this.username = username
         this.email = email
         this.password = password
    }
        
    encryptPass(){
        return `${this.password}abc`;

    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }

}

const User1 = new User("Milan","milan.gour@gmail.com",'qwerty@');
// console.log(User1.encryptPass());
//console.log(User1.changeUsername());

//we can do the same thing using function also
function Userzz(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Userzz.prototype.encryptPass = function(){
    return `${this.password}abc`;
}
Userzz.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const User2 = new Userzz("Milanzz","milan@gmail.com",'qwerty@12');
console.log(User2.encryptPass());
console.log(User2.changeUsername());

