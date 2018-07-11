import React, { Component } from "react";
import ScholarshipDetail from "./ScholarshipDetail";
import CourcesNews from "../Common/CourcesNews";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

class Scholarship extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Scholarship</h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row">
              <ScholarshipDetail />
              <CourcesNews />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Scholarship;
