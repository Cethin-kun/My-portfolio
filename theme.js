// Toggle theme function
function toggleTheme() {
    const themeLink = document.getElementById("theme-link");
    const currentTheme = themeLink.getAttribute("href");

    if(currentTheme.includes("light.css")){
        themeLink.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark.css");
    } else {
        themeLink.setAttribute("href", "light.css");
        localStorage.setItem("theme", "light.css");
    }
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){
        const themeLink = document.getElementById("theme-link");
        if(themeLink) themeLink.setAttribute("href", savedTheme);
    }
});
