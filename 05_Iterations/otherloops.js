// for-of loops

const arr = [1,2,3,4,5,6]
for (const i of arr) {
    //console.log(i);
}

const greetings = "Hello what is yor name gentleman"
for(const i of greetings){
    console.log(`Each Char is ${i}`);
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


const obj = {
    js: "javaScript",
    cpp: "C++",
    jdk: "Java",
    rb: "Ruby"
}


// For In Loop (Mostly used to iterate arrays)
for (const key in obj) {

    //console.log(obj[key]); //all the keys will be printed.
    //console.log(obj[key]); // all the values will be printed.
    
}

let arr1 = ["perl","ruby","java","cpp"]
for (const key in arr){
    //console.log(key); // It will print all the keys in the array basically indexing
    //console.log(arr1[key]); // will print the values in the array.
    
}


// most important 
// FOR Each Loop
const coding = ["cpp","java","python","ruby"]
coding.forEach( function (lang) {
    //console.log(lang) // print all the coding languages
} )

//using arrow function
coding.forEach( (item) => {
    //console.log(item);
} )

coding.forEach( (ele, index, arr) => {
    //console.log(ele,index,arr);
    //op
    /*
    cpp 0 [ 'cpp', 'java', 'python', 'ruby' ]
    java 1 [ 'cpp', 'java', 'python', 'ruby' ]
    python 2 [ 'cpp', 'java', 'python', 'ruby' ]
    ruby 3 [ 'cpp', 'java', 'python', 'ruby' ]
    */
})

const mycoding =[
    {
        name: "javaScript",
        file: ".js"
    },
    {
        name: "c++",
        file: ".cpp"
    },
    {
        name: "Python",
        file: ".py"
    }
]

mycoding.forEach( (item) => {
    //console.log(item.name);
})
