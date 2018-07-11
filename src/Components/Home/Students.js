import React, { Component } from "react";
import authorPic from "../../resources/img/author.jpg";

const studentData = [
  {
    title: "Johnathan Doe",
    status: "Ex. Student",
    department: "Software Department",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    title: "Warren Peter",
    status: "PHD Student",
    department: "Digital Marketing",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.scrambled it to make a type specimen book"
  },
  {
    title: "David Fernendus",
    status: "MS Student",
    department: "Software Department",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
];

class Students extends Component {
  studentBreakdown() {
    return studentData.map((item, index) => {
      return (
        <div key={index}>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="single_stsTestimonial wow fadeInUp">
              <div className="stsTestimonial_msgbox">
                <p>{item.desc}</p>
              </div>
              <img className="stsTesti_img" src={authorPic} alt="img" />
              <div className="stsTestimonial_content">
                <h3>{item.title}</h3>
                <span>{item.status}</span>
                <p>{item.department}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="studentsTestimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="title_area">
                <h2 className="title_two">{this.props.maintitle}</h2>
                <span />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="studentsTestimonial_content">
                <div className="row">{this.studentBreakdown()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Students;
