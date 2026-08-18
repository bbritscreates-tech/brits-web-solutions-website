const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden");

    mobileMenuButton.setAttribute("aria-expanded", !isOpen);

    if (isOpen) {
      mobileMenuIcon.classList.remove("fa-xmark");
      mobileMenuIcon.classList.add("fa-bars");
    } else {
      mobileMenuIcon.classList.remove("fa-bars");
      mobileMenuIcon.classList.add("fa-xmark");
    }
  });

  // Close menu when a mobile navigation link is clicked
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");

      mobileMenuIcon.classList.remove("fa-xmark");
      mobileMenuIcon.classList.add("fa-bars");

      mobileMenuButton.setAttribute("aria-expanded", "false");
    });
  });
}