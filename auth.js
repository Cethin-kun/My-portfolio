const adminUser = "Cethin_1"
const adminPass = "LestialxCethin2411"

/* SIGNUP */

document.getElementById("signupSubmit").onclick = () => {

const username = document.getElementById("signupUsername").value
const password = document.getElementById("signupPassword").value

if(!username || !password){
alert("Enter username and password")
return
}

let users = JSON.parse(localStorage.getItem("users")) || []

if(users.find(u => u.username === username)){
alert("Username already exists")
return
}

users.push({
username,
password,
isAdmin:false
})

localStorage.setItem("users",JSON.stringify(users))

alert("Account created successfully!")

}

/* LOGIN */

document.getElementById("loginSubmit").onclick = () => {

const username = document.getElementById("loginUsername").value
const password = document.getElementById("loginPassword").value

if(username === adminUser && password === adminPass){

const admin = {
username:adminUser,
isAdmin:true
}

localStorage.setItem("loggedInUser",JSON.stringify(admin))

loginSuccess()

return
}

let users = JSON.parse(localStorage.getItem("users")) || []

let user = users.find(u => u.username === username && u.password === password)

if(user){

localStorage.setItem("loggedInUser",JSON.stringify(user))

loginSuccess()

}else{

alert("Invalid username or password")

}

}

function loginSuccess(){

alert("Login successful!")

document.getElementById("loginModal").style.display="none"

document.getElementById("dashboardIcon").style.display="block"

}

/* WINDOW SYSTEM */

function openWindow(id){
document.getElementById(id).style.display="block"
}

function closeWindow(id){
document.getElementById(id).style.display="none"
}

/* NOTES */

function openNotes(){

const user = JSON.parse(localStorage.getItem("loggedInUser"))

if(!user){
alert("Please login first")
return
}

openWindow("notesWindow")

let notes = localStorage.getItem("notes_"+user.username) || ""

document.getElementById("notesText").value = notes

}

function saveNotes(){

const user = JSON.parse(localStorage.getItem("loggedInUser"))

if(!user){
alert("Login required")
return
}

const text = document.getElementById("notesText").value

localStorage.setItem("notes_"+user.username,text)

alert("Notes saved")

}

/* WARNINGS */

function openWarnings(){

openWindow("warningsWindow")

let warnings = localStorage.getItem("warnings") || "No warnings"

const user = JSON.parse(localStorage.getItem("loggedInUser"))

const box = document.getElementById("warningsText")

box.value = warnings

if(user && user.isAdmin){

box.readOnly=false
document.getElementById("saveWarningsBtn").style.display="block"

}else{

box.readOnly=true
document.getElementById("saveWarningsBtn").style.display="none"

}

}

function saveWarnings(){

const text = document.getElementById("warningsText").value

localStorage.setItem("warnings",text)

alert("Warnings updated")

}
