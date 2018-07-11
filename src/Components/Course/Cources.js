import React, { Component } from "react";

import CourcesNews from "../Common/CourcesNews";
import CourseDetail from "./CourseDetail";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

class Cources extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Cources</h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row">
              <CourseDetail />
              <CourcesNews />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Cources;
