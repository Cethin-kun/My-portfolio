const modal = document.getElementById("loginModal");
const startBtn = document.getElementById("startBtn");
const closeBtn = document.querySelector(".close");

startBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.onclick = function(event){

if(event.target === modal){
closeModal();
}

}


function openModal(){

modal.style.display = "flex";

setTimeout(()=>{
modal.classList.add("show");
},10);

showTab("login");

}


function closeModal(){

modal.classList.remove("show");

setTimeout(()=>{
modal.style.display="none";
},300);

}


function showTab(tab){

const tabs = document.querySelectorAll(".tab-content");

tabs.forEach(t=>{
t.classList.remove("active");
});

document.getElementById(tab).classList.add("active");

}
