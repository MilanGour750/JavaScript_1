const sayDate = function(str){
    console.log(str, Date.now());
}
document.querySelector('.start').addEventListener('click', function(e){
    const busBhai = setInterval(sayDate, 2000, "HIIII");

    document.querySelector('.stop').addEventListener('click',function(e){
        clearInterval(busBhai)
        console.log("STOPPED!!!")
    })
})
