const score = 400
//console.log(score);

const balance = new Number(1000)
//console.log(balance);


//console.log(typeof balance.toString());
//console.log(balance.toFixed(2)); // only 2 digits will be shown after point


const num2 = 1123.8966
//console.log(num2.toPrecision(3)) //roundoff taking precison after 3 decimals

const hund = 10000000000
//console.log(hund.toLocaleString('en-IN')); // to use to put commas according to lakhs and thousands

// **************************** MATHS ************************** //

//common maths terminologies like sqrt,pow, min(),max() 
console.log(Math.random());
console.log((Math.random()*10)+1)

let max =10
let min =5
console.log(Math.floor(Math.random() * (max-min+1))+ min)

 