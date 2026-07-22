// =====================================================
// NAVBAR - Mobile Menu Toggle
// =====================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Swap the bars/times icon
    const icon = menuToggle.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    });
  });
}

// =====================================================
// NAVBAR - Highlight Active Page Link
// =====================================================

(function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links li a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
})();

// =====================================================
// SCROLL TO TOP - Footer Button
// =====================================================

const scrollTopBtn = document.querySelector(".ScrollToTop-top-btn");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =====================================================
// AUTO SCROLL TO TOP ON PAGE LOAD (mimics ScrollToTopPage.jsx)
// =====================================================

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================================================
// CONTACT FORM VALIDATION (Contact page only)
// =====================================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const subject = contactForm.querySelector('input[name="subject"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Name Validation
    if (name.trim().length < 3) {
      alert("Name must be at least 3 characters.");
      return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Subject Validation
    if (subject.trim().length < 5) {
      alert("Subject must be at least 5 characters.");
      return;
    }

    // Message Validation
    if (message.trim().length < 10) {
      alert("Message must be at least 10 characters.");
      return;
    }

    console.log("===== Coffee Time Contact Form =====");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    alert("Message Sent Successfully!");

    contactForm.reset();
  });
}
