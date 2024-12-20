// Random hexCode generator 

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
    //console.log(color);
};

let InterID;
const startChangingColor = function(){
    const ChangeBGcolor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!InterID){
        InterID = setInterval(ChangeBGcolor, 5000)
    }
}
const stopChangingColor = function(){
    clearInterval(InterID);
    InterID = null;
    console.log("Stopped!!!")
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);