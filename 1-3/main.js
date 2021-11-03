function copyParent(){
    document.getElementById("target").innerHTML += document.getElementById("parent").innerText;
}

function copychild(){
    document.getElementById("target").innerHTML += document.getElementById("child").innerText;

}

document.getElementById("parent-buton").onclick = function(){
    copyParent();
}

document.getElementById("child-buton").onclick = function(){
    copychild();
}

