// Function to toggle dropdown visibility
function toggleDropdown() {
    var dropdown = document.getElementById("partnersDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Function to close dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("partnersDropdown");
    var button = document.getElementById("partnersBtn");
    if (event.target !== dropdown && event.target !== button) {
        dropdown.style.display = "none";
    }
});


window.addEventListener("load", function() {
    // Check if the hash in the URL matches the ID of the about section
    if (window.location.hash === "#about-section") {
        // Prevent default behavior of scrolling to the about section
        window.location.hash = "";
    }
});

function scrollToAbout(event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Smoothly scroll to the about section
    var aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}

