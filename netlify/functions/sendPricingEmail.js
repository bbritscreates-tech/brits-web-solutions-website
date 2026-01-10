require("dotenv").config();
const fetch = require("node-fetch");

exports.handler = async function(event) {
  if (!event.body) return { statusCode: 400, body: "Missing body" };

  const { name, email, selected_plan, message } = JSON.parse(event.body);

  const BASE_URL = process.env.URL;

  try {
    // 1️⃣ Send admin notification
    await fetch(`${BASE_URL}/.netlify/functions/emails/pricing-inquiry-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
      },
      body: JSON.stringify({
        from: email,
        to: "brits.web.solutions.sa@gmail.com", // <-- your admin email
        subject: `New Pricing Inquiry: ${selected_plan}`,
        parameters: { name, email, selected_plan, message }
      }),
    });

    // 2️⃣ Send user confirmation
    await fetch(`${BASE_URL}/.netlify/functions/emails/pricing-inquiry-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET
      },
      body: JSON.stringify({
        from: "brits.web.solutions.sa@gmail.com", // <-- verified sender
        to: email,
        subject: `We received your inquiry about ${selected_plan}`,
        parameters: { name, selected_plan }
      }),
    });

    return { statusCode: 200, body: "Emails sent!" };

  } catch (err) {
    console.error("Error sending emails:", err);
    return { statusCode: 500, body: "Error sending emails" };
  }
};
