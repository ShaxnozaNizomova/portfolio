import React from "react";
import "./Projects.css";
import pro1 from "../../assets/images/pro1.png";
import pro2 from "../../assets/images/pro2.png";
import pro3 from "../../assets/images/pro3.png";
function Projects() {
  return (
    <div id="projects">
      <div>
        <h4 className="about__title">PROJECTS</h4>
        <div className="line"></div>
        <p className="about__text">
          Here you will find some of the projects that i created
        </p>
      </div>
      <div>
        <div className="pro__box">
          <div className="border">
            <img src={pro1} alt="project" width={980} />
          </div>
          <div className="pro__btn">
            <button>
              <a
                className="see"
                href="https://exam7-git-main-shaxnozanizomovas-projects.vercel.app/"
              >
                See The Project
              </a>
            </button>
          </div>
        </div>
        <div className="pro__box">
          <div className="border">
            <img src={pro2} alt="project" width={980} />
          </div>
          <div className="pro__btn">
            <button>
              <a
                className="see"
                href="https://exam6-git-main-shaxnozanizomovas-projects.vercel.app/"
              >
                See The Project
              </a>
            </button>
          </div>
        </div>
        <div className="pro__box">
          <div className="border">
            <img src={pro3} alt="project" width={980} />
          </div>
          <div className="pro__btn">
            <button>
              <a
                className="see"
                href="https://project3-git-main-shaxnozanizomovas-projects.vercel.app/"
              >
                See The Project
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
