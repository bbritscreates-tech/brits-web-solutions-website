// Billing toggle logic
const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const value = toggle.checked ? price.dataset.yearly : price.dataset.monthly;
    price.innerHTML = `<strong>${value}</strong>`;
  });
});

// Contact form
const contactForm = document.querySelector('#contact form');
const selectedPlanInput = document.getElementById('selectedPlan');

// Fill hidden field when plan button clicked
document.querySelectorAll('.pricing-card .btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default anchor behavior
    selectedPlanInput.value = btn.dataset.plan;
    // Scroll to form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

// Submit form
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    selected_plan: selectedPlanInput.value || "General Inquiry",
    message: contactForm.message.value
  };

  try {
    const res = await fetch("/.netlify/functions/sendPricingEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
      selectedPlanInput.value = "";
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Oops! Something went wrong. Please try again.");
  }
});
