const arr = [0,2,1,3,4,5] //declaration 
//in js arrays are 


//console.log(arr[1]); //from arrays reteriaval through strings are not possible example: 
//console.log[arr["one"]]
// 0 Based Indexing
// It make shallow copies it pintsthe same references as if any changes made it will made to the original copy

const myheros = ["Captian", "Shaktiman"]

const arr2 = new Array(1,2,3,4)
let num = arr2.length //find the length of the array 
//console.log(num);

//arr2.push(7) // to push or insert the element from the back
//arr2.push(9)
//arr2.push(10)
//arr2.push(26)
//arr2.push(17)

//arr2.pop() // to pop out the value from the back of the array.

//arr2.unshift(9) // Insert the value from the start of the array 
//arr2.shift // remove the value same as pop()

//console.log(arr2.includes(3)) // check weather the given element is there in the array !

//console.log(arr2)

//const newarr = arr2.join()
//console.log(newarr);

/*
const arr1 = new Array(1,2,3,4,5,6,7,8,9)
console.log("A ", arr1)
let mynew  = arr1.slice(1,4)
console.log(mynew)
console.log("B ", arr1)
let mynew1  = arr1.slice(1,4)
console.log(mynew1)
console.log("C ", arr1) */ 

const marvel = ["Thor", "ironman", "Hulk"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)
//console.log(marvel); // arrays ke andar array aagya which is not good practise.
//console.log(marvel[3]); // arrays ke andar array aagya which is not good practise.

//let my_var = marvel.concat(dc)
//console.log(my_var); // good pratise as arrays ke andar arrays was not the concept here 
// o/p -> [thor, iron , hulk, superman , flash , batman]

// spread operator
let newheros = [...marvel, ...dc]
//console.log(newheros) // gives same output as concat but its widely use
// [ 'Thor', 'ironman', 'Hulk', 'superman', 'flash', 'batman' ]

let arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//const arr4 = arr3.flat(Infinity) // (depth), Used to concate nate the arrays with its depth as single single elements
// o/p => 1,2,3,4,5,6,7,6,7,4,5 

