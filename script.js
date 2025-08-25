// Password protection for Season Pass
function checkPassword() {
    const password = "jugal123"; // Change this to your desired password
    const userInput = prompt("Enter the password to access Season Pass:");

    if (userInput === password) {
        window.location.href = "season.htm"; // Redirect if password matches
    } else {
        alert("Incorrect password. Access denied!");
    }
}

// Function for navigation highlight (optional enhancement)
function highlightActiveLink() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
}

// Function to make hero image responsive
function adjustHeroImage() {
    const heroImg = document.querySelector(".hero-img img");
    if (heroImg) {
        heroImg.style.maxWidth = "100%";
        heroImg.style.height = "auto";
    }
}

// Function to initialize everything
function initPortfolio() {
    highlightActiveLink();
    adjustHeroImage();
}

// Run when page loads
window.onload = initPortfolio;
