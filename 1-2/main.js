function mouseover1(){
    document.getElementById("blue").style.background = "red";
}
function mouseout1(){
    document.getElementById("blue").style.background = "blue"
}

function mouseover2(){
    document.getElementById("red").style.background = "blue";
}
function mouseout2(){
    document.getElementById("red").style.background = "red"
}

document.getElementById("blue").onmouseover = function(){
    mouseover1();
}
document.getElementById("blue").onmouseout = function (){
    mouseout1();
}

document.getElementById("red").onmouseover = function (){
    mouseover2();

}
document.getElementById("red").onmouseout = function(){
    mouseout2();
}