// for-of loops

const arr = [1,2,3,4,5,6]
for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello what is yor name gentleman"
for(const i of greetings){
    //console.log(`Each Char is ${i}`);
}

// Maps 
const newmap = new Map();
newmap.set('IN' , "India")
newmap.set('USA' , "United States Of America")
newmap.set('UK' , "United Kingdom")

//console.log(newmap);

for (const [key, value] of newmap) {
    //console.log(key, ':->', value)
}

const myobj = {
    game1: "PUBG",
    game2: "WWE",
    game3: "Spiderman"
}
for (const i of myobj) {
    
}

