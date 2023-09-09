import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Animation from "./Animation";


// import ParticlesBackground from "./ParticlesBackground";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const resumeDownload = this.props.data.resumedownload;
    

    return (
      <header id="home">
        <ParticlesBg type="cobweb" color="#ffffff" number="5" bg={true} />
        {/* <ParticlesBackground/> */}
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
              <h2 className="name responsive-headline">{name}</h2>
              <Animation/>
            {/* <hr/> */}
            <Fade bottom duration={2000}>
              <ul className="social">
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Resume
                </a> */}
                <a href={resumeDownload} target="_blank" className="button btn project-btn">
                  <i className="fa fa-download"></i>Download Resume
                </a>
                <a href={github} target="_blank" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
