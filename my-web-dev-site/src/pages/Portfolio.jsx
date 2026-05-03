import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import lawfirmImg from "../assets/projects/lawfirm-landing.png";
import salonImg from "../assets/projects/salon-landing.png";
import ecommerceImg from "../assets/projects/ecommerce-landing.png";
import techImg from "../assets/projects/dark-ecommerce-landing.png";


const projects = [
  {
    title: "Lawfirm Website",
    description: "Modern law firm website built to improve trust, clarity, and client enquiries.",
    image: lawfirmImg,
    slug: "lawfirm-site"
  },
  {
    title: "Salon Website",
    description: "High-conversion salon landing page designed to increase bookings.",
    image: salonImg,
    slug: "salon-site"
  },
  {
    title: "E-commerce Concept",
    description: "Clean shopping experience for better usability.",
    image: ecommerceImg,
    slug: "ecommerce"
  },
  {
    title: "Tech Shop E-commerce Concept",
    description: "Modern tech e-commerce store designed for fast browsing and easy product comparison.",
    image: techImg,
    slug: "tech-ecommerce-site"
  }
  
];

export default function Portfolio() {
  return (
    <div className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Selected Work</h2>
        <p>A curated selection of projects built for real-world impact.</p>
      </motion.div>

      <div className="portfolio-grid">

        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <Link
              to={`/projects/${project.slug}`}
              className="portfolio-card"
            >

              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>

    </div>
  );
}