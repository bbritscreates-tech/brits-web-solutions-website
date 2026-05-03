import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero">
  <div className="hero-content">

    <div className="hero-badge">
      Web Design & Development Studio
    </div>

    <h1>
      Websites that don’t just look good — they bring clients.
    </h1>

    <p>
      I design and build fast, modern websites for businesses that want more enquiries, more trust, and better results.
    </p>

    <div className="hero-buttons">
      <a
        href="https://wa.me/277XXXXXXXXX"
        className="btn primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get a Free Quote
      </a>

      <a href="/portfolio" className="btn secondary">
        View Work
      </a>
    </div>

  </div>

  
</div>
<div className="trust-strip">
  <p>Fast • Mobile Optimised • SEO Ready • Conversion Focused</p>
</div>
      {/* PROBLEM */}
      <div className="section">

  <h2>What I do</h2>
  <p>Everything needed to turn your website into a business asset.</p>

  <div className="grid">

    <div className="card">
      <h3>High-Converting Design</h3>
      <p>Strategic layouts that guide visitors toward contacting you.</p>
    </div>

    <div className="card">
      <h3>Fast Performance</h3>
      <p>Lightning-fast websites that keep users engaged.</p>
    </div>

    <div className="card">
      <h3>SEO Ready</h3>
      <p>Built to rank and bring organic traffic from Google.</p>
    </div>

  </div>

</div>

      {/* SOLUTION */}
      <div className="section dark">

  <h2>Results that matter</h2>
  <p>Websites built to increase leads, not just sit online.</p>

  <div className="grid">

    <div className="card highlight">
      <h3>+120%</h3>
      <p>Increase in enquiries for service businesses</p>
    </div>

    <div className="card highlight">
      <h3>2–3s</h3>
      <p>Average load time across all builds</p>
    </div>

    <div className="card highlight">
      <h3>Mobile First</h3>
      <p>Optimised for the device your customers actually use</p>
    </div>

  </div>

</div>

      {/* PROOF */}
      <section className="section">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Recent Work</h2>
          <p>Real projects built for real businesses.</p>

          <div style={{ marginTop: "20px" }}>
            <Link to="/portfolio" className="btn">
              View Full Portfolio
            </Link>
          </div>

        </motion.div>

      </section>

      {/* PRICING TEASER */}
      <section className="section dark">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Simple, transparent pricing</h2>
          <p>Every project is quoted based on your needs.</p>

          <div className="card highlight">
            <h3>From R2,500+</h3>
            <p>Landing pages, business websites, and full web systems available.</p>
          </div>

        </motion.div>

      </section>

      {/* FINAL CTA */}
      <div className="cta">

  <h2>Ready to upgrade your website?</h2>

  <p>
    Let’s build something that actually brings you customers.
  </p>

  <a
    href="https://wa.me/277XXXXXXXXX"
    className="btn primary"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start a Project
  </a>

</div>

    </div>
  );
}