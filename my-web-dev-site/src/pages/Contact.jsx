import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Let’s Build Your Website</h2>
        <p>Tell me what you need and I’ll get back to you as soon as possible.</p>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "40px", maxWidth: "600px" }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          style={textareaStyle}
        />

        <button
          type="submit"
          className="btn primary"
          style={{ marginTop: "20px", display: "inline-block" }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p style={{ marginTop: "15px", color: "green" }}>
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p style={{ marginTop: "15px", color: "red" }}>
            Something went wrong. Try again.
          </p>
        )}

      </form>

      <div style={{ marginTop: "50px" }}>
        <p>Or message me directly on WhatsApp:</p>

        <a
          href="https://wa.me/277XXXXXXXXX"
          className="btn secondary whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", marginTop: "10px" }}
        >
          Open WhatsApp
        </a>
      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  fontSize: "14px",
  outline: "none"
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  fontSize: "14px",
  outline: "none",
  resize: "none"
};