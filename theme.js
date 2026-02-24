function toggleTheme() {
    const themeLink = document.getElementById("theme-link");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "light.css") {
        themeLink.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark.css");
    } else {
        themeLink.setAttribute("href", "light.css");
        localStorage.setItem("theme", "light.css");
    }
}

// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.getElementById("theme-link").setAttribute("href", savedTheme);
    }
};

