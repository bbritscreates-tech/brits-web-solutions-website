/* =========================================
   INDUSTRY FILTER
========================================= */

const industryButtons = document.querySelectorAll(".industry-btn");
const socialCards = document.querySelectorAll(".social-card");

industryButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.getAttribute("data-filter");

    // Remove active state from all buttons
    industryButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Activate clicked button
    button.classList.add("active");

    // Filter cards
    socialCards.forEach(card => {

      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }

    });

  });

});