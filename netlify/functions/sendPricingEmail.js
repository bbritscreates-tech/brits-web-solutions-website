import fetch from "node-fetch";

export async function handler(event) {
  if (!event.body) {
    return { statusCode: 400, body: "Missing body" };
  }

  const { name, email, selected_plan, message } = JSON.parse(event.body);

  // 1️⃣ Send admin notification
  await fetch(`${process.env.URL}/.netlify/functions/emails/pricing-inquiry-admin`, {
    method: "POST",
    headers: { "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET },
    body: JSON.stringify({
      from: email,
      to: "you@yourdomain.com",   // <-- your email
      subject: `New Pricing Inquiry: ${selected_plan}`,
      parameters: { name, email, selected_plan, message },
    }),
  });

  // 2️⃣ Send user confirmation
  await fetch(`${process.env.URL}/.netlify/functions/emails/pricing-inquiry-user`, {
    method: "POST",
    headers: { "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET },
    body: JSON.stringify({
      from: "info@yourdomain.com",  // <-- your verified sending email
      to: email,
      subject: `We received your inquiry about ${selected_plan}`,
      parameters: { name, selected_plan },
    }),
  });

  return { statusCode: 200, body: "Emails sent!" };
}

document.getElementById("pricingForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    selectedPlan: form.selectedPlan.value,
    message: form.message.value
  };

  const res = await fetch("/.netlify/functions/sendPricingEmail", {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (res.ok) alert("Thanks! Your request has been sent.");
  else alert("Oops, something went wrong. Please try again.");
});
