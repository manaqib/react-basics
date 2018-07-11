import React, { Component } from "react";

const whyourservices = [
  {
    icons: "desktop",
    techstatus: "Technology",
    techdesc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    icons: "users",
    techstatus: "Best Tutor",
    techdesc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    icons: "flask",
    techstatus: "Practical Training",
    techdesc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    icons: "support",
    techstatus: "Support",
    techdesc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
];

class Whyus extends Component {
  whyiteration() {
    return whyourservices.map((item, index) => {
      return (
        <div key={index}>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="single_whyus_top wow fadeInUp">
              <div className="whyus_icon">
                <span className={`fa fa-${item.icons}`} />
              </div>
              <h3>{item.techstatus}</h3>
              <p> {item.techdesc} </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="whyUs">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="whyus_top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="title_area">
                      <h2 className="title_two">Why Us</h2>
                      <span />
                    </div>
                  </div>
                </div>

                <div className="row">{this.whyiteration()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Whyus;
