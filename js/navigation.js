document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");

    if (!navLinks.length) return;


    // ========================================
    // CURRENT PAGE
    // ========================================

    let currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    // Root domain = index.html
    if (currentPage === "") {
        currentPage = "index.html";
    }


    // ========================================
    // REMOVE ALL ACTIVE CLASSES
    // ========================================

    navLinks.forEach(link => {
        link.classList.remove("active");
    });


    // ========================================
    // SEPARATE PAGES
    // ========================================

    if (
        currentPage === "portfolio.html" ||
        currentPage === "social-media.html" ||
        currentPage === "about.html"
    ) {

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            // Remove query strings and hashes
            const linkPage = href
                .split("#")[0]
                .split("?")[0]
                .split("/")
                .pop()
                .toLowerCase();

            if (linkPage === currentPage) {
                link.classList.add("active");
            }

        });

        return;
    }


    // ========================================
    // HOME PAGE
    // ========================================

    if (currentPage !== "index.html") {
        return;
    }


    // ----------------------------------------
    // Determine current section
    // ----------------------------------------

    const sections = document.querySelectorAll("section[id]");

    function updateSection() {

        let currentSection = "home";

        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.id.toLowerCase();
            }

        });


        // ------------------------------------
        // Remove active
        // ------------------------------------

        navLinks.forEach(link => {
            link.classList.remove("active");
        });


        // ------------------------------------
        // Find matching link
        // ------------------------------------

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            if (
                href === `#${currentSection}` ||
                href === `/index.html#${currentSection}`
            ) {
                link.classList.add("active");
            }

            // Home
            if (
                currentSection === "home" &&
                (
                    href === "/index.html" ||
                    href === "#"
                )
            ) {
                link.classList.add("active");
            }

        });

    }


    // ----------------------------------------
    // Initial state
    // ----------------------------------------

    updateSection();


    // ----------------------------------------
    // Scroll
    // ----------------------------------------

    window.addEventListener("scroll", updateSection);


    // ----------------------------------------
    // Hash change
    // ----------------------------------------

    window.addEventListener("hashchange", updateSection);

});