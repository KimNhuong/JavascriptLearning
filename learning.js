document.getElementsByClassName("nav-title")[0].addEventListener("click", function() {
    window.alert("you're at the home page")
});

let count = 0;

document.getElementById("increment").onclick = function(){
    count++;
    document.getElementsByClassName("Result")[0].innerHTML = count;
}

document.getElementById("decrement").onclick = function(){
    count--;
    document.getElementsByClassName("Result")[0].innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementsByClassName("Result")[0].innerHTML = count;
}