var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
document.addEventListener("DOMContentLoaded", function() {
    // Delay showing the popup by 3 seconds (3000 milliseconds)
    setTimeout(function() {
        var popupContainer = document.getElementById("popupContainer");
        popupContainer.classList.add("show"); // Add show class to display the popup
        var popupContent = document.querySelector(".popup-content");
        popupContent.style.opacity = 1; // Change opacity to 1 for smooth transition
    }, 1000); // 3 seconds delay
});

function closePopup() {
    var popupContainer = document.getElementById("popupContainer");
    var popupContent = document.querySelector(".popup-content");
    popupContent.style.opacity = 0; // Change opacity to 0 for smooth transition
    setTimeout(function() {
        popupContainer.classList.remove("show"); // Remove show class to hide the popup
    }, 300); // Wait for transition to complete (300 milliseconds)
}



