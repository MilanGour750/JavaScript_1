// Once constant is declared can't be changed.
const accountId = 12345

// let is widely used to declare a variable as it allows scope block and function block
//i.e -> {.....}
let accEmail = "milan@gmail.com"

// var is not to declare a variable now a days as it  doesnt allows scope block and function block executables.
//i.e ->  doesnt allow{.....}
var accountType = "Savings"

// Js is a secure language so it automatically saves the varibale and its type without using let or const
gender = "male"

// it will be marked as undefined as no value is provided to variable.
let balance;

console.table([accountId,accEmail,accountType,gender,balance]);


