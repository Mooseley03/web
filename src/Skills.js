import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Sample data for technical skills
const skillsData = [
  { name: "Java", proficiency: "Advanced" },
  { name: "JavaScript", proficiency: "Intermediate" },
  { name: "Python", proficiency: "Intermediate" },
  { name: "HTML & CSS", proficiency: "Advanced" },
  { name: "React", proficiency: "Intermediate" },
  { name: "SQL", proficiency: "Intermediate" },
  { name: "Node.js", proficiency: "Intermediate" },
  { name: "TypeScript", proficiency: "Beginner" },
  { name: "R", proficiency: "Beginner" },
  { name: "C", proficiency: "Intermediate" },
  { name: "C++", proficiency: "Beginner" },
  { name: "Git & GitHub", proficiency: "Intermediate" },
  { name: "MQL", proficiency: "Intermediate" },
];

const projectsData = [
  {
    name: "Portfolio Website",
    description: "Created a website to provide information regarding my technical abilities, project details, and to enhance my virtual presence.",
    link: "#",
  },
  {
    name: "Web Scraper",
    description: "A tool to pull information about a product from \"amazon.com/(product)\" when given the product link.",
    link: "#",
  },
  {
    name: "Roommate Finder Website",
    description: "Created a website allowing users to find roommates with similar daily habits and interests using a MySQL database with account creation and dynamically loaded quizzes, images, and cards.",
    link: "#",
  },
  {
    name: "Find Fiesta (mobile app)",
    description: "Created a mobile application to work as a virtual lost and found as well as provide direct messaging between users. The app utilizes a MongoDB database to store user information and posts. It also uses the Google Maps API to display the location of posts.",
    link: "#"
  },
  {
    name: "Tetris Recreation",
    description: "Recreated Tetris using the Python library Pygame to build a game canvas and mimic the game mechanics.",
    link: "#"
  },
];

const collegeEducationData = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Iowa State University",
  year: "Expected Graduation: Spring 2026",
};

const highSchoolEducationData = {
    school: "Waukee High School",
    graduation: "Graduation: Spring 2022",
    APEX: "Engineering Technology and Robotics APEX program"
};

export default function Skills({ viewer, setViewer, isExpanded, setIsExpanded }) {
  const pageStyles = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#2C3E50", // Primary color (Off-White/Very Light Beige)
    color: "#FAFAFA"
  };

  const contentStyles = {
    padding: "20px",
    textAlign: "center",
  };

  const sectionTitleStyles = {
    color: "#FAFAFA", // Secondary color (Dark Charcoal or Navy Blue)
    textAlign: "center",
    marginTop: "1em",
  };

  const introStyles = {
    marginBottom: "10px",
    textAlign: "center",
  };

  const cardStyles = {
    backgroundColor: "white",
    color: "#2C3E50",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px #3498DB",
    width: "calc(25% - 20px)",
    minWidth: "250px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const projectLinkStyles = {
    color: "#3498DB", // Accent color (Sky Blue)
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "auto",
    alignSelf: "flex-start",
    transition: "color 0.3s", // Adding smooth transition for hover effect
  };

  const projectLinkHoverStyles = {
    color: "#A2C7E1", // Light Blue for hover state
  };

  // Function to group cards into rows of up to 4 cards per row
  const createRows = (data) => {
    const rows = [];
    let row = [];
    data.forEach((item, index) => {
      row.push(item);
      if (row.length === 4 || index === data.length - 1) {
        rows.push(row);
        row = [];
      }
    });
    return rows;
  };

  const skillsRows = createRows(skillsData);
  const projectsRows = createRows(projectsData);

  return (
    <div style={pageStyles}>
      <Navbar viewer={viewer} setViewer={setViewer} />

      <div style={contentStyles}>
        <section style={introStyles}>
          <h1 style={sectionTitleStyles}>Skills</h1>
          <p>
            As a Junior Software Engineer at Iowa State University, I have developed strong technical skills through my coursework, personal projects, and hands-on experience. Below is a list of skills and personal projects that I've worked on and with.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Technical Skills</h2>
          {skillsRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              {row.map((skill, index) => (
                <div key={index} style={cardStyles}>
                  <h3>{skill.name}</h3>
                  <p>{skill.proficiency}</p>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Projects</h2>
          {projectsRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              {row.map((project, index) => (
                <div key={index} style={cardStyles}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={projectLinkStyles}
                    onMouseOver={(e) => e.target.style.color = projectLinkHoverStyles.color}
                    onMouseOut={(e) => e.target.style.color = projectLinkStyles.color}
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section>
          <h2 style={sectionTitleStyles}>Education</h2>
          <p>
            <strong>{collegeEducationData.degree} from {collegeEducationData.institution}</strong>, {collegeEducationData.year}
            <br />
            <strong>{highSchoolEducationData.school}, </strong> with participation in {highSchoolEducationData.APEX}, {highSchoolEducationData.graduation}
          </p>
        </section>
      </div>

        <footer>
      {/* <footer style={footerStyles}> */}
        <Footer />
      </footer>
    </div>
  );
}
