import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <section id="footer">
        <div className="row footer">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="footer-text"><h3>CONNECT AND COLLABORATE</h3></ul>
              <hr className=""></hr>
              <ul className="footer-text">Interested in tech, music, art, or anything under the sun?</ul>
              <ul className="footer-text">Drop me an email at simrankukreja0612@gmail.com OR Find me on social media:</ul>
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright - Simran Kukreja</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
