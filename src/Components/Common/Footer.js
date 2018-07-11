import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-ld-3  col-md-3 col-sm-3">
              <div className="single_footer_widget">
                <h3>About Us</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-ld-3  col-md-3 col-sm-3">
              <div className="single_footer_widget">
                <h3>Community</h3>
                <ul className="footer_widget_nav">
                  <li>
                    <Link to="/">Our Tutors</Link>
                  </li>
                  <li>
                    <Link to="/">Our Students</Link>
                  </li>
                  <li>
                    <Link to="/">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/">Forum</Link>
                  </li>
                  <li>
                    <Link to="/">News &amp; Media</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-ld-3  col-md-3 col-sm-3">
              <div className="single_footer_widget">
                <h3>Others</h3>
                <ul className="footer_widget_nav">
                  <li>
                    <Link to="/">Link 1</Link>
                  </li>
                  <li>
                    <Link to="/">Link 2</Link>
                  </li>
                  <li>
                    <Link to="/">Link 3</Link>
                  </li>
                  <li>
                    <Link to="/">Link 4</Link>
                  </li>
                  <li>
                    <Link to="/">Link 5</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-ld-3  col-md-3 col-sm-3">
              <div className="single_footer_widget">
                <h3>Social Links</h3>
                <ul className="footer_social">
                  <li>
                    <Link
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                      className="soc_tooltip"
                      to="/"
                    >
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                      className="soc_tooltip"
                      to="/"
                    >
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Google+"
                      className="soc_tooltip"
                      to="/"
                    >
                      <i className="fa fa-google-plus" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Linkedin"
                      className="soc_tooltip"
                      to="/"
                    >
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Youtube"
                      className="soc_tooltip"
                      to="/"
                    >
                      <i className="fa fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
