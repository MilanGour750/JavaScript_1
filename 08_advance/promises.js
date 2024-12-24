// fetch('https://something.com').then().catch().finally() // Some basic promises

// how to create promises

//method 1
const promiseOne = new Promise( (resolve, reject )=>{
    // Do an async task 
    // DB task, cryptography, network calls

    setTimeout(function(){
        console.log('Async task completed !');
        resolve(); //if we write this then its connected with then
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed!!')
}) // resolve is connected with then()

// method 2
new Promise(function(resolve,reject){
    setTimeout( ()=> {
        console.log('Async task 2!!')
        resolve();
    },1000)
}).then( ()=> {
    console.log('Async 2 resolved')
})


const promise3 = new Promise( (resolve, reject)=> {
    setTimeout(function(){

    },1000);
    resolve({username:"Milan", email: "milan@gmail.com"});
})
promise3.then((user)=>{
    console.log(user);
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Millu" ,pass: "123"});
        }
        else{
            reject(`Somethingg went wrong`);
        }
    })
},2000)

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then( (username) =>{
    console.log(username);
}).catch( (error)=> {
    console.log(error);
}).finally( ()=> {
    console.log(`Task Completed successfully`);
})

const promise5 = new Promise( (resolve,reject)=> {
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javaScript" ,pass: "123@g"});
        }
        else{
            reject(`JS went wrong`);
        }
    },1000)
})

async function consumePromisefive(){
    try{
        const response = await promise5;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromisefive();


// using try catch block 
async function getAlluser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}
getAlluser();

using .then.catch()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally()


