const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// ----------------------------------------
// NORMALISE PATH
// ----------------------------------------

function normalizePath(path) {
    path = path.toLowerCase();

    // Remove trailing slash
    if (path.length > 1 && path.endsWith("/")) {
        path = path.slice(0, -1);
    }

    // Treat root as index.html
    if (path === "") {
        path = "/index.html";
    }

    if (path === "/") {
        path = "/index.html";
    }

    return path;
}


// ----------------------------------------
// UPDATE ACTIVE NAV
// ----------------------------------------

function updateActiveNav() {

    const currentPath = normalizePath(window.location.pathname);
    const currentHash = window.location.hash.toLowerCase();

    // Remove all active classes first
    navLinks.forEach(link => {
        link.classList.remove("active");
    });


    // ========================================
    // SEPARATE PAGES
    // ========================================

    const separatePages = [
        "/portfolio.html",
        "/social-media.html",
        "/about.html"
    ];

    if (separatePages.includes(currentPath)) {

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            const linkUrl = new URL(href, window.location.origin);
            const linkPath = normalizePath(linkUrl.pathname);

            if (linkPath === currentPath) {
                link.classList.add("active");
            }

        });

        return;
    }


    // ========================================
    // HOME PAGE
    // ========================================

    const isHomePage = currentPath === "/index.html";

    if (!isHomePage) {
        return;
    }


    // ----------------------------------------
    // If URL contains a hash
    // Example: index.html#services
    // ----------------------------------------

    if (currentHash) {

        const sectionId = currentHash.substring(1);

        const matchingLink = document.querySelector(
            `.nav-link[href="#${sectionId}"]`
        );

        if (matchingLink) {
            matchingLink.classList.add("active");
            return;
        }
    }


    // ----------------------------------------
    // Detect section while scrolling
    // ----------------------------------------

    let currentSection = "";

    sections.forEach(section => {

        const rect = section.getBoundingClientRect();

        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        if (
            sectionTop <= 180 &&
            sectionBottom > 180
        ) {
            currentSection = section.id.toLowerCase();
        }

    });


    // ----------------------------------------
    // If at top of page → Home
    // ----------------------------------------

    if (window.scrollY < 100 && !currentSection) {

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            const linkUrl = new URL(href, window.location.origin);
            const linkPath = normalizePath(linkUrl.pathname);

            if (
                link.getAttribute("href") === "#home" ||
                linkPath === "/index.html"
            ) {
                link.classList.add("active");
            }

        });

        return;
    }


    // ----------------------------------------
    // Activate current section
    // ----------------------------------------

    if (currentSection) {

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            if (
                href.toLowerCase() === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

}


// ----------------------------------------
// EVENTS
// ----------------------------------------

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
window.addEventListener("hashchange", updateActiveNav);