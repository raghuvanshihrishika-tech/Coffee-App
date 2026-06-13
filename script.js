// =========================
// MOBILE MENU TOGGLE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "&times;";
    } else {
        menuBtn.innerHTML = "☰";
    }
});

// =========================
// CLOSE MENU ON LINK CLICK
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

// =========================
// STICKY NAVBAR SHADOW
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
        navbar.style.background = "#0b0b0b";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// =========================
// SMOOTH SCROLLING
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll(
    ".hero, .black-coffee, .hot-coffee, .white-coffee, .voucher-section, .reviews, .open-hours, .branches"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// =========================
// CURRENT YEAR IN FOOTER
// =========================

const footer = document.querySelector("footer");

const year = document.createElement("p");

year.style.textAlign = "center";
year.style.marginTop = "30px";
year.innerHTML = `© ${new Date().getFullYear()} Coffee Time. All Rights Reserved.`;

footer.appendChild(year);