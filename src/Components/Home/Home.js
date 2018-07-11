import React, { Component } from "react";

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import About from "./About";
import Whyus from "./Whyus";
import Students from "./Students";
import WhyusBottom from "./WhyusBottom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <About
          abouttitle="About Us"
          aboutdesc={`Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
        <Whyus />
        <WhyusBottom />
        <Students
          maintitle="What our Student says"
          studendesc="when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
