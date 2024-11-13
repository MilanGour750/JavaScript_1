let name = "Milan"
let repocnt = 50

//console.log(name+repocnt+ " Value")  //NOt Recommended

//using backticks ``
//console.log(`hello my name is ${name} and my repo count is ${repocnt}.`)

// Through this method the string will have key value pais like 0:k,1:a etc etc
const gamename = new String('Kamla-game')

//console.log(gamename[0]);
//console.log(gamename.length);
//console.log(gamename.toLowerCase());
//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('a'));

const newstring = gamename.substring(0,6) // last value not included
//console.log(newstring)

const news = gamename.slice(-7,1) // minus matlab piche se start hoga!
//console.log(news);

let newstring1 = "     MILAN    "
//console.log(newstring1)
//console.log(newstring1.trim())

const url = "https://google.com/milan%20gour"
//console.log(url.replace('%20','-')) it will replace %20 with -

console.log(url.includes('sundar')) //includes(seperator, limit)


