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

let items = ["dice generator", "calculator"];
let dropdown = document.querySelector(".nav-dropdown .dropdown-list");
let navDropdown = document.querySelector(".nav-dropdown");

if (dropdown && navDropdown) {
    navDropdown.addEventListener("mouseover", function() {
        dropdown.innerHTML = "";
        items.forEach(function(item) {
            let li = document.createElement("li");
            li.textContent = item;
            dropdown.appendChild(li);
        });
        dropdown.style.display = "block";
    });

    navDropdown.addEventListener("mouseout", function() {
        dropdown.style.display = "none";
    });
}

 