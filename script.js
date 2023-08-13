let count = 0;
let numPeopleEntered = document.getElementById("num_people_entered")



function incrementCount(){
     count = count + 1
   numPeopleEntered.innerHTML = count;
}

function save(){
    console.log(count)
}

let message = "you have three new notifications";
let userName = "Linta"

let messageToUser = message + ", " + userName + "!";
 console.log(messageToUser);


let welcomeNeshin = document.getElementById("welcome-back");

let myName = "Neshin Nelson"

let greetings = "Welcome Back"

welcomeNeshin.innerText = greetings + myName;

