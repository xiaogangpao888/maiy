
var wrap = document.querySelector(".wrap");
var arrow_right = document.querySelector(".arrow_right");
var next = document.querySelector(".arrow_right");
var prev = document.querySelector(".arrow_left");
next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic () {
    var newLeft = parseInt(wrap.style.left)-900;
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    var newLeft = parseInt(wrap.style.left)+900;
    wrap.style.left = newLeft + "px";
}

function next_pic () {
    var newLeft;
    if(wrap.style.left === "-5400px"){
        newLeft = -1800;
    }else{
        newLeft = parseInt(wrap.style.left)-900;
    }
    wrap.style.left = newLeft + "px";
}
function prev_pic () {
    var newLeft;
    if(wrap.style.left === "0px"){
        newLeft = -3600;
    }else{
        newLeft = parseInt(wrap.style.left)+900;
    }
    wrap.style.left = newLeft + "px";
}

var timer = null;
function autoPlay () {
    timer = setInterval(function () {
        next_pic();
    },2000);
}
autoPlay();

var container = document.querySelector(".container");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();    
}

var index = 0;
var dots = document.getElementsByTagName("span");
function showCurrentDot () {
    for(var i = 0, len = dots.length; i < len; i++){
        dots[i].className = "";
    }
    dots[index].className = "on";
}

index++;
    if(index > 4){
        index = 0;
    } 

    index--;
    if(index < 0){
        index = 4;
    }
    showCurrentDot();

    for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-4500){
                dis = dis - 5;     
            }
          
            if(index == 0 && parseInt(wrap.style.left)!== -900){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 900)+"px";
            index = i;
            showCurrentDot();
        }
    })(i);            
}