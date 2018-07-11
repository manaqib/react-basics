import React, { Component } from "react";

import { Link } from "react-router-dom";
import courseImg from "../../resources/img/course-1.jpg";
import author from "../../resources/img/author.jpg";

const courseDetailPanel = [
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  },
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  },
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  },
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  },
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  },
  {
    heading: "Introduction to Matrix",
    amount: "$20",
    amountdetail: "Per One Month",
    desc:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    techername: "Richard Remus, Teacher"
  }
];

class CourseDetail extends Component {
  courseDetails() {
    return courseDetailPanel.map((item, index) => {
      return (
        <div key={index}>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single_course wow fadeInUp">
              <div className="singCourse_imgarea">
                <img src={courseImg} alt="img" />
                <div className="mask">
                  <Link to="/coursesingle" className="course_more">
                    View Course
                  </Link>
                </div>
              </div>
              <div className="singCourse_content">
                <h3 className="singCourse_title">
                  <Link to="/coursesingle">{item.heading}</Link>
                </h3>
                <p className="singCourse_price">
                  <span>{item.amount}</span> {item.amountdetail}
                </p>
                <p>{item.desc}</p>
              </div>
              <div className="singCourse_author">
                <img src={author} alt="img" />
                <p>{item.techername}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-lg-8 col-md-8 col-sm-8">
        <div className="courseArchive_content">
          <div className="row"> {this.courseDetails()} </div>
          <div className="single_blog_prevnext">
            <Link to="#" className="prev_post wow fadeInLeft animated">
              <i className="fa fa-angle-left" />Previous
            </Link>
            <Link to="#" className="next_post wow fadeInRight animated">
              Next<i className="fa fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
