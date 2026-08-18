const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    const currentPath = window.location.pathname.toLowerCase();
    const currentHash = window.location.hash.toLowerCase();

    navLinks.forEach((link) => {
        link.classList.remove("active");
    });

    // ----------------------------------------
    // 1. HANDLE SEPARATE PAGES
    // ----------------------------------------

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) return;

        const linkUrl = new URL(href, window.location.origin);
        const linkPath = linkUrl.pathname.toLowerCase();

        // Portfolio page
        if (
            currentPath.endsWith("/portfolio.html") &&
            linkPath.endsWith("/portfolio.html")
        ) {
            link.classList.add("active");
        }

        // Social Media page
        if (
            currentPath.endsWith("/social-media.html") &&
            linkPath.endsWith("/social-media.html")
        ) {
            link.classList.add("active");
        }
    });

    // ----------------------------------------
    // 2. HANDLE HOME PAGE SECTIONS
    // ----------------------------------------

    const isHomePage =
        currentPath === "/" ||
        currentPath.endsWith("/index.html") ||
        currentPath.endsWith("/");

    if (!isHomePage) return;

    // If we're at the very top, Home is active
    if (window.scrollY < 100 && !currentHash) {
        const homeLink = document.querySelector(
            '.nav-link[href="#home"], .nav-link[href="/index.html"]'
        );

        if (homeLink) {
            homeLink.classList.add("active");
        }

        return;
    }

    let currentSection = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {
            currentSection = section.id.toLowerCase();
        }
    });

    // If no section was detected, don't change anything
    if (!currentSection) return;

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (!href) return;

        // Same-page section links
        if (href.toLowerCase() === `#${currentSection}`) {
            link.classList.add("active");
        }

        // Home link
        if (
            currentSection === "home" &&
            (
                href.toLowerCase() === "#home" ||
                href.toLowerCase() === "/index.html"
            )
        ) {
            link.classList.add("active");
        }
    });
}

// Scroll
window.addEventListener("scroll", updateActiveNav);

// Page load
window.addEventListener("load", updateActiveNav);

// Hash changes
window.addEventListener("hashchange", updateActiveNav);