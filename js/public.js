//时间按秒走
function createDate(){
    var d = new Date();
    
    var year = d.getFullYear()
    var month = d.getMonth()
    var date = d.getDate()
    var day = d.getDay()

    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()

    switch(day){
        case 0:day = "星期日";break;
        case 1:day = "星期一";break;
        case 2:day = "星期二";break;
        case 3:day = "星期三";break;
        case 4:day = "星期四";break;
        case 5:day = "星期五";break;
        case 6:day = "星期六";break;
    }

    var str = year+"年"+createZero(month+1)+"月"+createZero(date)+" "+day+" "+createZero(h)+":"+createZero(m)+":"+createZero(s);

    return str;
}

function createZero(n){
    if(n<10){
        return "0"+n;
    }else{
        return n;
    }
}

//两个日期之间的差值
function dateDiff(date1,date2){
    date2 = date2 ? new Date(date2) : new Date();
    date1 = new Date(date1);
    var t = Math.abs(date1 - date2);

    var day = parseInt(t/1000/60/60/24);
    var hours = parseInt((t - day*24*60*60*1000)/1000/60/60);
    var minutes = parseInt((t - day*24*60*60*1000 - hours*60*60*1000)/1000/60)
    var seconds = parseInt((t - day*24*60*60*1000 - hours*60*60*1000 - minutes*60*1000)/1000)
 //补零
    return {
        day:day,
        hours:hours,
        minutes:minutes,
        seconds:seconds
    }
}

// 获取非行内样式
function getStyle(ele,attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }else{
        return getComputedStyle(ele,false)[attr];
    }
}

// 阻止事件冒泡
function stopBubble(e){
    if(e.stopPropagation){
        e.stopPropagation()
    }else{
        e.cancelBubble = true;       //兼容IE
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

// 绑定事件
function addEvent(ele,type,callback){
    if(ele.addEventListener){
        ele.addEventListener(type,callback,false)   //非IE
    }else if(ele.attachEvent){
        ele.attachEvent("on"+type,callback)         //IE
    }else{
        ele["on"+type] = callback;
    }
}

// 删除事件
function removeEvent(ele,type,callback){
    if(ele.removeEventListener){
        ele.removeEventListener(type,callback,false)     //非IE
    }else if(ele.detachEvent){
        ele.detachEvent("on"+type,callback)              //IE
    }else{
        ele["on"+type] = null;
    }
}

