let x = " Click added some text!"

document.getElementById("box").onclick = function (){
    document.getElementById("box").innerHTML += x;
}