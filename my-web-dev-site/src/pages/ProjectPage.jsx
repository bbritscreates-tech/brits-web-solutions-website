import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import lawfirmImg from "../assets/projects/lawfirm-landing.png";
import salonImg from "../assets/projects/salon-landing.png";
import ecommerceImg from "../assets/projects/ecommerce-landing.png";
import techImg from "../assets/projects/dark-ecommerce-landing.png";


const projects = {
  "lawfirm-site": {
    title: "Lawfirm Website",
    image: lawfirmImg,
    description: "Modern law firm website built to improve trust, clarity, and client enquiries..",
    problem: "Most law firms rely on outdated websites that fail to build trust or convert visitors into consultations. The original structure was cluttered, difficult to navigate, and didn’t clearly communicate expertise or encourage potential clients to take action. As a result, visitors were leaving without making contact..",
    solution: "A complete redesign focused on clarity, trust, and conversion. The layout was simplified to highlight key legal services, strong credibility indicators were introduced, and strategic call-to-action sections were placed throughout the site. The user journey was rebuilt to guide visitors smoothly toward booking a consultation.",
    result: "The new design creates a strong first impression and significantly improves user engagement. Visitors can quickly understand the firm’s expertise and are guided naturally toward making contact, resulting in higher enquiry intent and a more professional brand perception.",
    live: "https://bbritscreates-tech.github.io/law-firm-demo/",
    github: "#"
  },

  "salon-site": {
    title: "Salon Website",
    image: salonImg,
    description: "High-conversion salon landing page designed to increase bookings.",
    problem: "The salon relied on a basic online presence that wasn’t generating consistent bookings. Visitors often left without taking action due to unclear messaging, weak calls-to-action, and a layout that didn’t guide users toward scheduling an appointment.",
    solution: "A modern, conversion-focused landing page was designed with a clear booking journey. The structure was simplified to highlight services, pricing intent, and trust elements such as testimonials and visual branding. Strong call-to-action sections were placed throughout the page to encourage immediate bookings.",
    result: "The redesigned experience creates a much clearer path for users to book appointments. Visitors can quickly understand services, build trust, and take action, resulting in improved engagement and higher booking intent.",
    live: "https://bbritscreates-tech.github.io/salon-demo/",
    github: "#"
  },

  "ecommerce": {
    title: "E-commerce Concept",
    image: ecommerceImg,
    description: "Clean shopping experience for better usability.",
    problem: "The original shopping experience (or concept direction) suffered from poor product discoverability and a cluttered layout. Users struggled to find relevant products quickly, and there was no clear structure guiding them from browsing to purchase.",
    solution: "The platform was redesigned with a strong focus on simplicity and user flow. Products were organised into clear categories, navigation was streamlined, and the layout was optimised for quick scanning. Visual hierarchy and spacing were improved to highlight products, while maintaining a clean, trustworthy aesthetic suited for health and skincare branding.",
    result: "The new design creates a smooth and intuitive shopping experience. Users can quickly browse, understand product offerings, and move through the buying journey with less friction, improving engagement and purchase intent.",
    live: "https://bbritscreates-tech.github.io/ecommerce-demo/",
    github: "#"
  },

  "tech-ecommerce-site": {
    title: "Tech Shop E-commerce Concept",
    image: techImg,
    description: "Modern tech e-commerce store designed for fast browsing and easy product comparison.",
    problem: "Tech retail websites are often overloaded with information, making it difficult for users to quickly find and compare products. In this concept, the lack of clear structure and visual hierarchy made the shopping experience feel overwhelming and inefficient, reducing purchase confidence..",
    solution: "The store was redesigned with a strong focus on clarity, categorisation, and product visibility. Products were grouped into intuitive sections (laptops, monitors, office setups, accessories), and the layout was simplified to support fast browsing. Clean spacing, strong imagery, and structured product cards were used to improve readability and decision-making.",
    result: "The improved experience makes it significantly easier for users to browse and compare tech products. Customers can quickly identify what they need, understand product value, and move toward purchase decisions with more confidence and less friction.",
    live: "https://bbritscreates-tech.github.io/ecommerce-dark-tech-demo/",
    github: "#"
  }
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <div className="section">
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div>

      {/* HERO */}
      <div className="project-hero">
        <img src={project.image} alt={project.title} />

        <motion.div
          className="project-overlay"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className="project-buttons">
            <a href={project.live} className="btn" target="_blank">
              View Live
            </a>

            <a href={`https://wa.me/27YOURNUMBERHERE`} className="btn secondary discuss" target="_blank">
              Discuss Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="section">

        <div className="grid">

          <div className="card">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="card">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="card">
            <h3>Result</h3>
            <p>{project.result}</p>
          </div>

        </div>

        <div style={{ marginTop: "40px" }}>
          <Link to="/portfolio" className="btn">
            ← Back to Portfolio
          </Link>
        </div>

      </div>

    </div>
  );
}