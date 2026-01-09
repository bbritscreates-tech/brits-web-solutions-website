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
