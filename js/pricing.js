// Billing toggle logic (your existing code)
const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const value = toggle.checked ? price.dataset.yearly : price.dataset.monthly;
    price.innerHTML = `<strong>${value}</strong>`;
  });
});

// Contact form submission logic
const contactForm = document.querySelector('#contact form');

// Fill hidden field when plan button clicked
document.querySelectorAll('.pricing-card .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('selectedPlan').value = btn.dataset.plan;
    // optionally scroll to footer
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    selected_plan: document.getElementById('selectedPlan').value || "General Inquiry",
    message: contactForm.message.value
  };

  const res = await fetch("/.netlify/functions/sendPricingEmail", {
    method: "POST",
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
    document.getElementById('selectedPlan').value = '';
  } else {
    alert("Oops! Something went wrong.");
  }
});
