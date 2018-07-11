import React, { Component } from "react";
import News from "./News";

class About extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Home</h2>
        </section>
        <section id="aboutUs">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="aboutus_area wow fadeInLeft">
                  <h2 className="aboutTitle">{this.props.abouttitle}</h2>
                  <p>{this.props.aboutdesc}</p>
                </div>
              </div>
              <News />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
