var welcomeName = document.getElementById('welcomeName')

if( localStorage.getItem("userName") != null){

welcomeName.innerHTML = ` ${localStorage.getItem("userName")}`
}