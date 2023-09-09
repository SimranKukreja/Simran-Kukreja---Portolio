import React, { Component } from "react";
import Slide from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      return (
        <div key={projects.company} className="portNoOverflow">
          <h3 className="portHeader">{projects.title} 
          {/* <a href={projects.github} target="_blank">
          </a> */}
          &nbsp;&nbsp;
            <a href={projects.github} target="_blank">
                  <i className="fa fa-github portfolio"></i>
          </a>
          </h3>
          {projects.date}
          {/* <p className="info">
            {projects.title} 
          </p> */}
          <p className="info">{projects.desc}</p>
          <br/>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Slide left duration={1300}>
            <div className="row portfolio">
              <div className="two columns header-col">
                <h1>
                  <span>Projects</span>
                </h1>
              </div>

              <div className="nine columns main-col">{projects}</div>
            </div>
          </Slide>
        </section>
    )



  }
}

export default Portfolio;
