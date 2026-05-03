import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="section">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Brits Web Solutions</h2>
        <p>
          We build modern, high-converting websites for businesses that want more than just an online presence.
        </p>
      </motion.div>

      {/* MISSION */}
      <div className="grid" style={{ marginTop: "40px" }}>

        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To help small and growing businesses turn their websites into powerful sales tools.
          </p>
        </div>

        <div className="card">
          <h3>Our Approach</h3>
          <p>
            Clean design, fast performance, and conversion-focused structure in every project.
          </p>
        </div>

        <div className="card">
          <h3>Why It Works</h3>
          <p>
            We don’t just build “pretty websites” — we build websites that generate enquiries and sales.
          </p>
        </div>

      </div>

      {/* PERSONAL / TRUST SECTION */}
      <div className="card" style={{ marginTop: "50px" }}>

        <h3>Who We Are</h3>

        <p>
          Brits Web Solutions is a small, focused web development studio.
          We work closely with each client to ensure their website matches their brand, goals, and audience.
        </p>

        <p style={{ marginTop: "10px" }}>
          Every project is built with care, performance, and conversion strategy in mind.
        </p>

      </div>

    </div>
  );
}