
import React, { useState } from 'react';
import p1 from '../../assets/portfolio-1.png';
import p2 from '../../assets/portfolio-2.png';
import p3 from '../../assets/portfolio-3.png';
import p4 from '../../assets/portfolio-4.png';
import p5 from '../../assets/portfolio-5.png';
import './works.css';

const projects = [
  {
    id: 1,
    img: p1, // Replace with the actual image reference
    name: 'InstAid',
    tech: ['AI', 'ML'],
    desc: 'A cutting-edge tool for predicting potential health issues based on user inputs, designed to streamline early diagnosis and offer tailored healthcare insights.',
    source: 'https://github.com/madhumi27/Instaid',
    live: 'https://github.com/madhumi27/Instaid'
  },
  {
    id: 2,
    img: p2, // Replace with the actual image reference
    name: 'VibeEscape',
    tech: ['Metaverse', 'Ethereum'],
    desc: 'An immersive gaming experience that educates about drug abuse through engaging virtual scenarios, incorporating Ethereum-based tokens for added interactivity.',
    source: 'https://github.com/madhumi27/VibeEscape',
    live: 'https://github.com/madhumi27/VibeEscape'
  },
  {
    id: 3,
    img: p3, // Replace with the actual image reference
    name: 'Yoga Academy Admission Portal',
    tech: ['React', 'Spring Boot', 'MySQL'],
    desc: 'A platform designed for managing yoga academy registrations, offering users an intuitive way to browse and enroll in courses and training programs.',
    source: 'https://github.com/madhumi27/ZenYoga',
    live: 'https://github.com/madhumi27/ZenYoga'
  },
  {
    id: 4,
    img: p4, // Replace with the actual image reference
    name: 'Employee Management System',
    tech: ['React', 'Spring Boot', 'MySQL'],
    desc: 'A robust portal for managing employee data, including attendance, performance tracking, and record maintenance, ensuring operational efficiency.',
    source: 'https://github.com/madhumi27', // Add specific project link if available
    live: 'https://github.com/madhumi27' // Add specific project link if available
  },
  {
    id: 5,
    img: p5, // Replace with the actual image reference
    name: 'Attendance Tracker',
    tech: ['Java'],
    desc: 'A console-based Java application that simplifies attendance monitoring by enabling teachers to record and analyze student attendance effectively.',
    source: 'https://github.com/madhumi27', // Add specific project link if available
    live: 'https://github.com/madhumi27' // Add specific project link if available
  }
];



const Works = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePopupClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details.</span>
      <div className="worksContainer">
        {projects.map((project) => (
          <div className="worksCard" key={project.id}>
            <img src={project.img} alt={project.name} className="worksImg" />
            <div className="worksOverlay">
              <h3 className="worksName">{project.name}</h3>
              <p className="worksTech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="worksTechItem">
                    #{tech}
                  </span>
                ))}
              </p>
              <button
                className="worksBtn"
                onClick={() => handlePopupClick(project)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && selectedProject && (
        <div className="popup">
          <div className="popupContent">
            <button className="popupClose" onClick={handlePopupClose}>
              &times;
            </button>
            <img src={selectedProject.img} alt={selectedProject.name} className="popupImg" />
            <h3 className="popupTitle">{selectedProject.name}</h3>
            <p className="popupDesc">{selectedProject.desc}</p>
            <div className="popupButtons">
            <a
              href={selectedProject.source}
              target="_blank"
              rel="noopener noreferrer"
              className="popupButton"
            >
              View Source
            </a>
            <a
              href={selectedProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="popupButton"
            >
              View Live
            </a>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
