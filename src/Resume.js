import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";

export default function Resume({ viewer, setViewer, isExpanded, setIsExpanded }) {

    // Styling
    const containerStyles = {
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "0",
        minHeight: "100vh", // Ensure full page height
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2C3E50", // Primary color (Off-White)
    };

    const contentContainerStyles = {
        padding: "20px",
        margin: "0 auto",
        maxWidth: "1500px", // Limit the width of the content
        width: "65%",
        flex: 1, // This will make sure the content takes up the remaining space between header and footer
        color: "#2C3E50", // Secondary color (Dark Charcoal)
    };

    const iframeContainerStyles = {
        width: "100%",
        display: "flex",
        justifyContent: "center", // Center the iframe horizontally
    };

    const sectionStyles = {
        marginBottom: "20px",
        paddingBottom: "20px",
        position: "relative"
    };

    const titleStyles = {
        color: "#FAFAFA", // Secondary color (Dark Charcoal)
        textAlign: "center",
        marginBottom: "20px",
    };

    const sectionTitleStyles = {
        color: "#FAFAFA", // Secondary color (Dark Charcoal)
        textAlign: "center",
        marginTop: "2em",
    };

    const sectionTextStyles = {
        color: "#FAFAFA", // Secondary color (Dark Charcoal)
        textAlign: "center",
    };

    const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "#3498DB", // Accent color (Sky Blue)
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s", // Adding smooth transition for hover effect
    textDecoration: "none",
    position: "absolute",
    top: "50%", 
    left: "50%",
    transform: "translate(-50%, -50%)"  // This centers the button
};

    // Adding hover effect for the button
    const buttonHoverStyles = {
        backgroundColor: "#A2C7E1", // Light Blue for hover state
    };

    return (
        <div style={containerStyles}>
            {/* Navbar (Header) */}
            <Navbar viewer={viewer} setViewer={setViewer} />

            {/* Content Area */}
            <div style={contentContainerStyles}>
                {/* <h1 style={titleStyles}>My Resume</h1> */}

                <div style={sectionStyles}>
                    <h2 style={sectionTitleStyles}>Download and View My Resume</h2>
                    <p style={sectionTextStyles}>Below is my resume. You can view it directly here, or download it if needed.</p>

                    {/* Embed the PDF using iframe */}
                    <div style={iframeContainerStyles}>
                        <iframe
                            src="https://github.com/Mooseley03/web/blob/ff31cce221b3357af2f1ec242699cb9e39eb91fe/public/ChrisMoseleyFall2024Resume.pdf"  // Update this with the actual path to your PDF
                            width="100%"
                            height="800px"
                            style={{ border: "none" }}
                        ></iframe>
                    </div>
                </div>

                {/* Download Button */}
                <div style={sectionStyles}>
                    {/*<h2 style={sectionTitleStyles}>Download My Resume</h2>*/}
                    <a href="https://github.com/Mooseley03/web/blob/ff31cce221b3357af2f1ec242699cb9e39eb91fe/public/ChrisMoseleyFall2024Resume.pdf" download>
                        <button style={buttonStyles}>Download Resume</button>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}