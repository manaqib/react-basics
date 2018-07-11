import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

class Games extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Games</h2>
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

export default Games;
