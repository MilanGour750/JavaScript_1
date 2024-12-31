class User {
    constructor(username, email, passWord) {
        this.email = email;
        this.passWord = passWord; // Triggers the setter
        this.username = username;
    }

    get email (){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password() { // Getter for `password`
        return this._passWord.toUpperCase(); // Returns `_passWord` in uppercase
    }

    set passWord(val) { // Setter for `passWord`
        this._passWord = val // Sets `_passWord` in uppercase
    }
}

const milan = new User("milanzzz", "milan@123.ai", "aaaaa");
console.log(milan.email``); // Output: 123 (in uppercase: "123")
