
var olist = document.querySelector(".list")
var ali = olist.children;
var otxt = document.getElementById("txt");
var onOff = true;
var index = 0;
otxt.onclick = function(eve){
    var e = eve || window.event;
    stopBubble(e)
    if(onOff){
        olist.style.display = "block";
        setAction()
        onOff = false;
    }else{
        olist.style.display = "none";
        onOff = true;
    }
}
document.onclick = function(){
    olist.style.display = "none";
    onOff = true;
}
for(var i=0;i<ali.length;i++){
    ali[i].index = i;
    ali[i].onmouseover = function(){
        index = this.index;
        setAction();
    }
    ali[i].onclick = function(){
        otxt.innerHTML = this.innerHTML;
        index = this.index;
    }
}
document.onkeydown = function(eve){
    if(onOff) return;

    var e = eve || window.event;
    var code = e.keyCode || e.which;
    stopDefault(e)

    if(code == 38){
        if(index == 0){
            index = 0
        }else{
            index --
        }
        setAction()
        otxt.innerHTML = ali[index].innerHTML;
    }
    if(code == 40){
        if(index == ali.length-1){
            index = ali.length-1
        }else{
            index ++ 
        }
        setAction();
        otxt.innerHTML = ali[index].innerHTML;
    }
    if(code == 13){
        olist.style.display = "none";
        onOff = true
    }
}
function setAction(){
    for(var j=0;j<ali.length;j++){
        ali[j].className = "";
    }
    ali[index].className = "active";
}

// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble = true;
    }
}

// 阻止默认行为
function stopDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

