import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Homepage({ viewer, setViewer, isExpanded, setIsExpanded }) {
    // Inline styling for the page
    const styles = {
        homepageContainer: {
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            color: "#333",
            backgroundColor: "#FAFAFA",  // Off-white background for the whole page
        },
        heroSection: {
            backgroundColor: "#2C3E50",  // Dark blue for the hero section background
            padding: "10px 20px",
            textAlign: "center",
            color: "#FAFAFA",  // Light text to contrast with the dark background
        },
        heroContent: {
            maxWidth: "800px",
            margin: "0 auto",
        },
        heroHeading: {
            fontSize: "3rem",
            marginBottom: "10px",
            color: "#3498DB",  // Soft blue for the heading to highlight it
        },
        heroParagraph: {
            fontSize: "1.25rem",
            color: "#FAFAFA",  // Light text color
        },
        introSection: {
            backgroundColor: "#2C3E50",  // Off-white background for the intro section
            padding: "40px 20px",
            textAlign: "center",
        },
        introHeading: {
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#FAFAFA",  // Dark gray for a professional feel
            // color: "#34495E"
        },
        introParagraph: {
            fontSize: "1.125rem",
            marginBottom: "10px",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#FAFAFA",  // Dark gray for paragraph text
        },
        circularImage: {
            width: "300px", // Set desired size
            height: "300px", // Set desired size
            borderRadius: "50%",
            objectFit: "cover", // Ensures image fills the circular shape without distortion
            marginBottom: "20px", // Add some space below the image
            border: "5px solid #3498DB",  // Add blue border to match the theme
        },
    };

    return (
        <div style={styles.homepageContainer}>
            <Navbar viewer={viewer} setViewer={setViewer} isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

            <section style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroHeading}>Hi, I'm Chris Moseley</h1>

                    {/* Circular Image */}
                    <img 
                        src="/ProfilePic.jpg" 
                        alt="Chris Moseley" 
                        style={styles.circularImage} 
                    />

                    <p style={styles.heroParagraph}>I'm a Junior Software Engineer at Iowa State University</p>
                    <p style={styles.heroParagraph}>I create web applications and love to solve problems and experiment with code. <br /> Welcome to my portfolio!</p>
                </div>
            </section>

            <section style={styles.introSection}>
                <p style={styles.introParagraph}>
                    I'm a passionate software engineer currently studying at Iowa State University. On this website, you can
                    explore my skills, check out some of the projects I've worked on, download my resume, or get in touch with me!
                </p>
            </section>

            <Footer />
        </div>
    );
}
