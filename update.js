let  btn_dark = document.querySelector(".btn_dark");
let bg_light = document.querySelector(".navbar");
btn_dark.onclick = function(){
    navbar.style.color = "red"

}


let myscroll = document.querySelector(".scroll");
window.onscroll = function () {
        if (scrollY >= 400) {
        myscroll.style.display = "block";
        myscroll.style.background = '#6db784'
        myscroll.style.color = 'white'
    }
    else{
        myscroll.style.display = "none";
    }
}
myscroll.onclick = function() {
    scrollTo({
        left : 0 ,
        top : 0 ,
        behavior : "smooth"
    })
}

//// settings background home
var  mode= 0;
let home = document.getElementById("home");
let btn =document.querySelector(".btn-dark");
let btn_download = document.querySelector(".btn_download");
btn.onclick = function() {
if(mode ===0)
{
    btn.innerHTML="Light";
    document.body.classList.toggle("hhome");
    btn.style.background = "white";
    btn.style.color = "black";
    btn_download.style.background = "#ffde03  !important";
    btn_download.style.color = "black";
    btn_download.style.border = "none"
    mode = 1;

}
else if(mode ===1)
{
    btn.innerHTML="dark";
    document.body.classList.remove("hhome");
    btn.style.background = "black";
    btn.style.color = "white";
    mode = 0;
}

}