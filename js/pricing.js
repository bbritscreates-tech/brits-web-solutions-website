const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    const value = toggle.checked
      ? price.dataset.yearly
      : price.dataset.monthly;

    price.innerHTML = `<strong>${value}</strong>`;
  });
});

// PRICING → CONTACT FORM LINK
// Fill hidden input and message if user clicks a pricing plan
const planButtons = document.querySelectorAll('[data-plan]');
const planInput = document.getElementById('selectedPlan');
const messageBox = document.querySelector('textarea[name="message"]');

planButtons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    planInput.value = plan;

    if (messageBox) {
      messageBox.value = `I am interested in the ${plan} plan.`;
    }
  });
});

