import React, { Component } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const painting1 = "images/" + this.props.data.painting1;
    const painting2 = "images/" + this.props.data.painting2;
    const painting3 = "images/" + this.props.data.painting3;
    const painting4 = "images/" + this.props.data.painting4;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div class="aboutRow">
            <div class="aboutCol">
              <img
                  className="profile-pic"
                  src={profilepic}
                  alt="Simran Kukreja"
                />
              {/* <p class="bioMarg"><i>I believe in the power of collaboration and connection, and I'm excited to connect with fellow enthusiasts and professionals who share a love for all things tech!</i></p> */}
            </div>
            <div class="aboutCol">
              <h2 className="about">ABOUT ME</h2>
              <p>Hi, I'm Simran, a passionate and dedicated tech enthusiast based in Gainesville, Florida. From crafting elegant code and architecting innovation solutions, to exploring the depths of programming languages, I find joy in every facet of this dynamic realm. 
              <br/><br/>My work experience at <u>Deloitte USI, Oracle</u>, and <u>Health Equity</u> have not only instilled in me a software engineering mindset but also given me experience with cloud technologies, full-stack projects, using <u>Java, Python, Go(Golang), Apex, Salesforce.com, REST APIs, and SQL in the backend</u> and <u>JavaScript, ReactJS, Vue, Angular, jQuery in the frontend</u>.
              <br/><br/>As a part of my academic projects, I have explored distributed systems, functional programming, and built a real-time bitcoiner miner and twitter clone.
              <br/><br/>I'm currently pusuing a <u>Master's degree in Computer Science</u> from the <u>University of Florida</u>, have completed an <u>SDE internship at Health Equity</u> over the summer and am about to start in my new role as an <u>SDE Intern at HubSpot</u>.<br/>
              <br/>Feel free to reach out - I'm excited to connect with fellow enthusiasts and professionals who share a love for all things tech!</p>
            </div>
            {/* <div class="aboutCol">
              <img
                  className="paintingC"
                  src={painting3}
                  alt="painting"
              />
              <img
                  className="painting"
                  src={painting1}
                  alt="painting"
              />
              <br/>
              <img
                  className="painting"
                  src={painting2}
                  alt="painting"
              />
              <img
                  className="paintingC"
                  src={painting4}
                  alt="painting"
              /><br/>
              <p class="bioMarg2"><i>In my free time, I enjoy problem-solving, painting, travelling, trekking, and cooking.</i></p>
              
            </div> */}
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
