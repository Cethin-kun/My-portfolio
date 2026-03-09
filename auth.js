// ADMIN ACCOUNT
const ADMIN_USERNAME = "Cethin_admin<3";
const ADMIN_PASSWORD = "IamTheCutestAdmin<3";



// SIGN UP
function signup(){

const username = document.getElementById("signinUsername").value;
const password = document.getElementById("signinPassword").value;

if(username === "" || password === ""){
alert("Please fill all fields");
return;
}

const user = {
username: username,
password: password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created! You can now log in.");

showLogin();

}



// LOGIN
function login(){

const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;

const savedUser = JSON.parse(localStorage.getItem("user"));


// ADMIN LOGIN
if(username === ADMIN_USERNAME && password === ADMIN_PASSWORD){

localStorage.setItem("loggedInUser", JSON.stringify({
username: ADMIN_USERNAME
}));

alert("Admin login successful!");

window.location.href = "homepage.html";
return;

}


// NORMAL USER LOGIN
if(savedUser && username === savedUser.username && password === savedUser.password){

localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

alert("Login successful!");

window.location.href = "homepage.html";

}else{

alert("Invalid username or password");

}

}
