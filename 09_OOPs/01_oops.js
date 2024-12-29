// Object Literal
const user = {
    username: "Milan",
    loginCnt : 8,
    siggnedIn: true,

    getUserDetails : function(){
        // console.log("User Details Recieved");
        // console.log(`Username: ${this.username}`); //either use user.username && this because it is in the scope only

        // console.log(this);
        // // op => 
        //     {
        //         username: 'Milan',
        //         loginCnt: 8,
        //         siggnedIn: true,
        //         getUserDetails: [Function: getUserDetails]
        //       }
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const prom1 = new Promise( (resolve, reject)=> {

// })

function User(username, loginCnt, isLoggedIn){
    this.username= username
    this.isLoggedIn = isLoggedIn
    this.loginCnt = loginCnt

     

    return this
}

const User1 = User("Milan",12,true);
const User2 = User("Milanzzz Plays",12,true);
// console.log(User1);

// there i have not called user2 but still the username of user2 is printed which will create a problem 
// this is why we use constructor functon using new keyword

// Constructor Function
// new likha => {} called instance => Constructor function is called => all the this keyword is injected to instance 
const User3 = new User("sanket",12,true);
const User4 = new User("Owner Of MTH",12,true);

console.log(User3);
// console.log(User3);

