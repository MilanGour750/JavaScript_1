const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
// 0/p => {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI);
// And we cant change the math.pi 
const mth = {
    name: 'gud wali chai',
    price: "12",
    isAvail : true
}

// console.log(myDescriptor);
// o/p =>
    // {
//     value: 'gud wali chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// TO control the prperties of object 
Object.defineProperty(mth, 'name', {
    writable: false,
    enumerable : false,
    configurable: false
});
const myDescriptor = Object.getOwnPropertyDescriptor(mth,"name")
console.log(myDescriptor); 