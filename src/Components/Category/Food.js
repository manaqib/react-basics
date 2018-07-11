import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

class Food extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Food</h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row" />
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Food;
