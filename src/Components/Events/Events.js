import React, { Component } from "react";

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import CourcesNews from "../Common/CourcesNews";
import EventsDetail from "./EventsDetail";

class Events extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Events</h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row">
              <EventsDetail />
              <CourcesNews />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Events;
