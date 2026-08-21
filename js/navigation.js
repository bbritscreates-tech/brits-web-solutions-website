document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    if (!navLinks.length) return;

    // ========================================
    // GET CURRENT PAGE URL
    // ========================================

    const currentURL = new URL(window.location.href);

    const currentPath = currentURL.pathname
        .replace(/\/+$/, "")
        .toLowerCase();

    // Treat the root as index.html
    const normalizedCurrentPath =
        currentPath === "" ? "/index.html" : currentPath;


    // ========================================
    // REMOVE ALL ACTIVE CLASSES
    // ========================================

    function clearActive() {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
    }


    // ========================================
    // SEPARATE PAGES
    // ========================================

    function checkPageNav() {

        clearActive();

        let foundPage = false;

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            const linkURL = new URL(href, window.location.origin);

            let linkPath = linkURL.pathname
                .replace(/\/+$/, "")
                .toLowerCase();

            // Root = index.html
            if (linkPath === "") {
                linkPath = "/index.html";
            }

            /*
             * Only compare the page portion.
             * This means:
             *
             * /portfolio.html
             * /portfolio
             *
             * can both be handled.
             */

            const currentPageName =
                normalizedCurrentPath
                    .split("/")
                    .pop()
                    .replace(".html", "");

            const linkPageName =
                linkPath
                    .split("/")
                    .pop()
                    .replace(".html", "");


            // Separate pages
            if (
                currentPageName === linkPageName &&
                (
                    currentPageName === "portfolio" ||
                    currentPageName === "social-media" ||
                    currentPageName === "about"
                )
            ) {

                link.classList.add("active");
                foundPage = true;
            }

        });

        return foundPage;
    }


    // ========================================
    // HOME PAGE
    // ========================================

    function updateHomeSection() {

        const sections = document.querySelectorAll("section[id]");

        if (!sections.length) return;

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
                currentSection =
                    section.id.toLowerCase();
            }

        });


        clearActive();


        // ====================================
        // MATCH SECTION TO NAV LINK
        // ====================================

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href) return;

            const lowerHref = href.toLowerCase();


            // Home
            if (
                currentSection === "home" &&
                (
                    lowerHref === "#" ||
                    lowerHref === "#home" ||
                    lowerHref === "/index.html" ||
                    lowerHref === "/index.html#home"
                )
            ) {
                link.classList.add("active");
            }


            // Other sections
            if (
                lowerHref === `#${currentSection}` ||
                lowerHref === `/index.html#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }


    // ========================================
    // INITIAL PAGE CHECK
    // ========================================

    const isHome =
        normalizedCurrentPath === "/index.html";


    if (!isHome) {

        // Portfolio / Social Media / About
        checkPageNav();

    } else {

        // Homepage
        updateHomeSection();

    }


    // ========================================
    // EVENTS
    // ========================================

    window.addEventListener("scroll", function () {

        if (isHome) {
            updateHomeSection();
        }

    });


    window.addEventListener("hashchange", function () {

        if (isHome) {
            updateHomeSection();
        }

    });

});