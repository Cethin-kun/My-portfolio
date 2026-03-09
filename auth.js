const adminUser = "Cethin_1"
const adminPass = "LestialxCethin2411"

/* SIGNUP */

document.getElementById("signupSubmit").onclick = () =>{

const username = document.getElementById("signupUsername").value
const password = document.getElementById("signupPassword").value

let users = JSON.parse(localStorage.getItem("users")) || []

users.push({
username,
password,
isAdmin:false
})

localStorage.setItem("users",JSON.stringify(users))

alert("Account created")

}

/* LOGIN */

document.getElementById("loginSubmit").onclick = () =>{

const username = document.getElementById("loginUsername").value
const password = document.getElementById("loginPassword").value

/* ADMIN LOGIN */

if(username === adminUser && password === adminPass){

const admin = {
username:adminUser,
isAdmin:true
}

localStorage.setItem("loggedInUser",JSON.stringify(admin))

window.location.href="dashboard.html"

return

}

/* NORMAL LOGIN */

let users = JSON.parse(localStorage.getItem("users")) || []

let user = users.find(u => u.username === username && u.password === password)

if(user){

localStorage.setItem("loggedInUser",JSON.stringify(user))

window.location.href="dashboard.html"

}else{

alert("Invalid login")

}

}
