let Random = Math.floor(Math.random()*10);

document.getElementById("Guess").addEventListener("submit", function(e)  {
    e.preventDefault();
    let NumGuessed = parseInt(document.getElementById("GuessNum").value);
    if (isNaN(NumGuessed)) {
        document.getElementById("noti").innerHTML = "Please enter a valid number";
    } else if(NumGuessed > Random){
        document.getElementById("noti").innerHTML = "value too high";
    } 
    else if (NumGuessed == Random){
        document.getElementById("noti").innerHTML = "Correct, congrats!!";
    }
    else if (NumGuessed < Random){
        document.getElementById("noti").innerHTML = "Value too low";
    }
})