import React, { Component } from "react";
import Slide from "react-reveal";
import Zmage from "react-zmage";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p className="workDesc">{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span >&bull;</span> <em className="date">{work.years}</em>
          </p>
          
          <p className="workDesc"><h5>{work.header1}</h5>{work.description}<h5>{work.header2}</h5>{work.description2}</p>
          
        </div>
      );
    });

    const certs = this.props.data.certs.map(function (certs) {
      return (
        <div key={certs.name}>
          <p className="certsStyle">{certs.name}<a href={certs.link} target="_blank">&nbsp;&nbsp;<img className="linkStyle" src="/images/link.png"/></a></p>
        </div>
      );
    });


    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.src;

      return (
        <li key={skills.src}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.src}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>

          <div className="skillsrow skill">

            <div className="two columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col skillsAlign">
              <p>{skillmessage}</p>

              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="skillsImg" />
                <span class="skillsText">Java</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <span class="skillsText">Python</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
                <span class="skillsText">Go(Golang)</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <span class="skillsText">JavaScript</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <span class="skillsText">ReactJS</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <span class="skillsText">C</span>
              </div>


              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg" />
                <span class="skillsText">Erlang</span>
              </div>
              <div class="skillsItem">
                <img src="/images/apex.png" />
                <span class="skillsText">Apex</span>
              </div>
              <div class="skillsItem">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                <span class="skillsText">MySQL</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />

                <span class="skillsText">Oracle</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" />

                <span class="skillsText">Salesforce</span>
              </div>

              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />

                <span class="skillsText">Vue</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />

                <span class="skillsText">Angular</span>
              </div>
              <div class="skillsItem">


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />


                <span class="skillsText">SpringBoot</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />

                <span class="skillsText">jQuery</span>
              </div>

              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />

                <span class="skillsText">Android</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />

                <span class="skillsText">PHP</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />

                <span class="skillsText">Figma</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

                <span class="skillsText">Git</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" />

                <span class="skillsText">Windows</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />

                <span class="skillsText">Ubuntu</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />

                <span class="skillsText">Linux</span>
              </div>
              <div class="skillsItem">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />

                <span class="skillsText">Jira</span>
              </div>

              
              
            </div>
          </div>
        </Slide>
        <br /><br />

        <Slide left duration={1300}>
          <div className="row certifications">
            <div className="two columns header-col">
              <h1>
                <span>CERTIFICATIONS</span>
              </h1>
            </div>

            <div className="nine columns work-col">{certs}</div>
          </div>
        </Slide>
        <br /><br />
        <Slide left duration={1300}>
          <div className="row work">
            <div className="two columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns work-col">{work}</div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>


      </section>
    );
  }
}

export default Resume;
