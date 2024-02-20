var user = [];
user = JSON.parse(localStorage.getItem('user'))
var logInEmail = document.getElementById('signEmail')
var logInPassword = document.getElementById('signPassword')
var logInBtn = document.getElementById('logInBtn')



function logIn(){

    if (logInEmail.value =="" || logInPassword.value =="") {
        document.getElementById("message").innerHTML='<p class="text-center"> All Inputs Are Required </p> '
       } else{
       check();
       location.href='home.html'
}}
  

function check(){
for (let i = 0; i < user.length; i++) {
    if (logInEmail.value == user[i].Email && logInPassword.value == user[i].Password ) {
        var y = user[i].Name;
        localStorage.setItem('userName', y);
        break;
    }
    
}}
