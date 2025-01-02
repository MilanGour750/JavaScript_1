// function outer(){
//     let username = "Milan"
//     function inner(){
//         console.log("inner: ", username);
//     }
//     inner();
// }
// outer()
// console.log("Too Outer: ", username);


function MakeFun(){
    let name = "Mozilla"
    function displayName(){
        console.log(name);
    }

    return displayName;
}
const myFunction = MakeFun();
myFunction();