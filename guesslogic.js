let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let hscore = null;
let high = document.getElementById("High")
let attemptData = document.getElementById("Attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("res");
let message = document.getElementById("msg");

function check() {
    let usernum = parseInt(userinp.value);
    
    if (isNaN(usernum) || usernum < 1 || usernum > 100) {
        message.innerHTML = "Please enter a valid number between 1 and 100!";
        message.style.color = "orange";
        return;
    }
    
    if (cnum === usernum) {
        message.innerHTML = "Congratulations! You have guessed the number!";
        message.style.color = "green";
        resBtn.style.display = "block";

        if(hscore==null||attempt<hscore){
            hscore = attempt;
            high.innerHTML = hscore;
        }
    }
     else if (cnum < usernum) {
        message.innerHTML = "Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too low! Try again.";
        message.style.color = "red";
    }
    attempt++;
    attemptData.innerHTML = attempt;
    setTimeout(() => {
        userinp.value = "";
        message.innerHTML = "";
    }, 1000);
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    userinp.value = "";
    message.innerHTML = "Game reset! Guess a new number.";
    message.style.color = "black";
    resBtn.style.display = "none";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
