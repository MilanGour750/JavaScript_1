const SayName = function(){
    console.log("Milan")
}
const textChange = function(){
    document.querySelector('h1').innerHTML = "This is My YT Channel"
}
const changeME = setTimeout(textChange, 3000) // Only pass refrenece of the funtion not actual SayName()

//HOW TO STOP 

document.querySelector('#stop').addEventListener('click', function(e){
    clearTimeout(changeME);
    console.log("STOPPED!!!!")
});




