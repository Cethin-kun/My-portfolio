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
