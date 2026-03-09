// SIGN UP

document.getElementById("signupSubmit").addEventListener("click", function(){

const username = document.getElementById("signupUsername").value;
const email = document.getElementById("signupEmail").value;
const password = document.getElementById("signupPassword").value;

if(username === "" || password === ""){
alert("Please fill all fields");
return;
}

const user = {

username: username,
email: email,
password: password

};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created!");

});



// LOGIN

document.getElementById("loginSubmit").addEventListener("click", function(){

const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;

const savedUser = JSON.parse(localStorage.getItem("user"));

if(!savedUser){

alert("No account found. Please sign up.");
return;

}

if(username === savedUser.username && password === savedUser.password){

alert("Login successful!");
closeModal();

}else{

alert("Invalid username or password");

}

});




// LOGIN

document.getElementById("loginSubmit").addEventListener("click", function(){

const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;

const savedUser = JSON.parse(localStorage.getItem("user"));

const ADMIN_USERNAME = "Cethin_admin<3";
const ADMIN_PASSWORD = "IamTheCutestAdmin<3";


/* ADMIN LOGIN */

if(username === ADMIN_USERNAME && password === ADMIN_PASSWORD){

localStorage.setItem("loggedInUser", JSON.stringify({
username: ADMIN_USERNAME,
password: ADMIN_PASSWORD
}));

alert("Admin login successful!");

closeModal();
showAdminButton();

return;

}


  
/* NORMAL USER LOGIN */

if(!savedUser){

alert("No account found. Please sign up.");
return;

}

if(username === savedUser.username && password === savedUser.password){

localStorage.setItem("loggedInUser", JSON.stringify(savedUser));

alert("Login successful!");
closeModal();

}else{

alert("Invalid username or password");

}

});
