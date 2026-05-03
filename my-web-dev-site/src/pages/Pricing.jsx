import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Pricing</h2>
        <p>
          Simple, transparent pricing based on what your business actually needs.
        </p>
      </motion.div>

      <div className="grid">

        {/* Starter */}
        <div className="card">
          <h3>Starter Website</h3>
          <p>Perfect for small businesses just getting online.</p>

          <ul style={{ marginTop: "10px", color: "#64748b", fontSize: "14px" }}>
            <li>✔ 1–3 Pages</li>
            <li>✔ Mobile Responsive</li>
            <li>✔ Basic SEO Setup</li>
            <li>✔ Contact Form</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>From R2,500</h3>
        </div>

        {/* Business */}
        <div className="card" style={{ border: "2px solid #0284c7" }}>
          <h3>Business Website</h3>
          <p>Best for growing businesses that need leads.</p>

          <ul style={{ marginTop: "10px", color: "#64748b", fontSize: "14px" }}>
            <li>✔ 5–7 Pages</li>
            <li>✔ Conversion-focused design</li>
            <li>✔ SEO Optimised</li>
            <li>✔ WhatsApp integration</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>From R5,500</h3>
        </div>

        {/* Premium */}
        <div className="card">
          <h3>Premium Custom Build</h3>
          <p>For serious businesses that want maximum impact.</p>

          <ul style={{ marginTop: "10px", color: "#64748b", fontSize: "14px" }}>
            <li>✔ Full custom design</li>
            <li>✔ Advanced animations</li>
            <li>✔ Lead system integration</li>
            <li>✔ Priority support</li>
          </ul>

          <h3 style={{ marginTop: "15px" }}>From R10,000+</h3>
        </div>

      </div>

      {/* CTA */}
      <div className="pricing-cta">
  <h3>Not sure what you need?</h3>
  <p>Let’s talk and I’ll guide you.</p>

  <a
    href="https://wa.me/277XXXXXXXXX"
    className="btn primary"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get a Quote
  </a>
</div>

    </div>
  );
}