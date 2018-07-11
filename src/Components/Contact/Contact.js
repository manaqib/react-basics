import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";
import ContactAddress from "./ContactAddress";

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Contact</h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row">
              <ContactIntro />
              <ContactForm />
              <ContactAddress />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
