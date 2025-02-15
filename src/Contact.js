import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

export default function Contact({ viewer, setViewer, isExpanded, setIsExpanded }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .sendForm(
        'service_xj667sm', //service ID
        'template_brs15cq', //template ID
        e.target, // contains form data
        'W3SJOZgWSQThCvl3x' //user ID
      )
      .then(
        (result) => {
          console.log(result.text); // Log result (optional)
          setFormSubmitted(true); // Show success message
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text); // Log errors (optional)
        }
      );
  };

  const pageStyles = {
    fontFamily: "Arial, sans-serif",
    // padding: "20px",
    backgroundColor: "#2C3E50",
  };

  const sectionTitleStyles = {
    color: "#FAFAFA",
    textAlign: "center"
  };

  const sectionTextStyles = {
    color: "#FAFAFA",
    textAlign: "center"
  };

  const formStyles = {
    backgroundColor: "#FAFAFA",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyles = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const textAreaStyles = {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "150px",
  };

  const buttonStyles = {
    padding: "10px",
    backgroundColor: "#3498DB",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const successMessageStyles = {
    color: "green",
    marginTop: "20px",
  };

  const contactInfoStyles = {
    marginTop: "30px",
    textAlign: "center",
    color: "#FAFAFA"
  };

  const hyperlinkStyles = {
    color: "#3498DB"
  };

  return (
    <div style={pageStyles}>
      <Navbar viewer={viewer} setViewer={setViewer} />

      <section>
        <h1 style={sectionTitleStyles}>Contact Me</h1>
        <p style={sectionTextStyles}>If you'd like to get in touch, please fill out the form below or reach me through my contact information!</p>
      </section>

      <section>
        <h2 style={sectionTitleStyles}>Send a Message</h2>

        {/* Contact Form */}
        <form style={formStyles} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            style={inputStyles}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            style={inputStyles}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={textAreaStyles}
            required
          ></textarea>

          <button type="submit" style={buttonStyles}>Send Message</button>

          {formSubmitted && (
            <p style={successMessageStyles}>Thank you for reaching out! I'll get back to you as soon as I'm able.</p>
          )}
        </form>
      </section>

      <section style={contactInfoStyles}>
        <h2 style={sectionTitleStyles}>Contact Information</h2>
        <p>Email: <a href="mailto:chrisrmoseley1@gmail.com" style={hyperlinkStyles}>chrisrmoseley1@gmail.com</a></p>
        <p>Phone: <a href="tel:+5158658709" style={hyperlinkStyles}>+1 (515) 865-8709</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/christophermoseley2026" target="_blank" rel="noopener noreferrer" style={hyperlinkStyles}>LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/Mooseley03" target="_blank" rel="noopener noreferrer" style={hyperlinkStyles}>GitHub Profile</a></p>
      </section>

      <Footer />
    </div>
  );
}
