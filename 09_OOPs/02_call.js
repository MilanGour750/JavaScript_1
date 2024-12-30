function Setusername(username){
    //commplex DB calls
    this.username = username
}

function createUser(username,email,password){
    const userJI = Setusername.call(this, username);
    this.email = email;
    this.password = password
}

const user1 = new createUser("Milan","milan@gmail.com","1234")

console.log(user1) //createUser { email: 'milan@gmail.com', password: '1234' }

// username is not printing we dont know wheather calls are happening or not

// to explicitly call another function we need to use .call to call the explcit function