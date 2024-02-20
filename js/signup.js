var SignUpName = document.getElementById("signName");
var SignUpEmail = document.getElementById("signEmail");
var SignUpPassword = document.getElementById("signPassword");

var user=[];

if(localStorage.getItem('user') != null ){

user = JSON.parse(localStorage.getItem('user'))
} else {
    user = [];
}


function add() {
   if (SignUpName.value == "" || SignUpEmail.value =="" || SignUpPassword.value =="") {
    document.getElementById("message").innerHTML='<p class="text-center"> All Inputs Are Required </p> '
   } else {
    var obj ={
       Name: SignUpName.value,
       Email: SignUpEmail.value,
       Password: SignUpPassword.value
    }
    user.push(obj);
    // console.log(user);
    location.href="index.html"
    localStorage.setItem("user", JSON.stringify(user));

   }
    
}

