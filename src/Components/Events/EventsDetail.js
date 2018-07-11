import React, { Component } from "react";

import { Link } from "react-router-dom";
import blogPic from "../../resources/img/blog.jpg";

class EventsDetail extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-8 col-sm-8">
        <div className="courseArchive_content">
          <div className="row">
            <div className="col-lg-12 col-12 col-sm-12">
              <div className="single_blog_archive wow fadeInUp">
                <div className="blogimg_container">
                  <Link to="/" className="blog_img">
                    <img alt="img" src={blogPic} />
                  </Link>
                </div>
                <h2 className="blog_title">
                  <Link to="/events-single">
                    Curabitur ac dictum nisl eu hendrerit ante
                  </Link>
                </h2>
                <div className="blog_commentbox">
                  <p>
                    <i className="fa fa-clock-o" />Time: 7pm,15 March 2015
                  </p>
                  <p>
                    <i className="fa fa-map-marker" />Location: London,UK
                  </p>
                </div>
                <p className="blog_summary">
                  Duis erat purus, tincidunt vel ullamcorper ut, consequat
                  tempus nibh. Proin condimentum risus ligula, dignissim mollis
                  tortor hendrerit vel. Aliquam...
                </p>
                <Link className="blog_readmore" to="/eventssingle">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-12 col-sm-12">
              <div className="single_blog_archive wow fadeInUp">
                <div className="blogimg_container">
                  <Link to="/#" className="blog_img">
                    <img alt="img" src={blogPic} />
                  </Link>
                </div>
                <h2 className="blog_title">
                  <Link to="/eventssingle">
                    Curabitur ac dictum nisl eu hendrerit ante
                  </Link>
                </h2>
                <div className="blog_commentbox">
                  <p>
                    <i className="fa fa-clock-o" />Time: 7pm
                  </p>
                  <p>
                    <i className="fa fa-map-marker" />Location: London,UK
                  </p>
                </div>
                <p className="blog_summary">
                  Duis erat purus, tincidunt vel ullamcorper ut, consequat
                  tempus nibh. Proin condimentum risus ligula, dignissim mollis
                  tortor hendrerit vel. Aliquam...
                </p>
                <Link className="blog_readmore" to="/eventssingle">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-12 col-12 col-sm-12">
              <div className="single_blog_archive wow fadeInUp">
                <div className="blogimg_container">
                  <Link to="/#" className="blog_img">
                    <img alt="img" src={blogPic} />
                  </Link>
                </div>
                <h2 className="blog_title">
                  <Link to="/eventssingle">
                    Curabitur ac dictum nisl eu hendrerit ante
                  </Link>
                </h2>
                <div className="blog_commentbox">
                  <p>
                    <i className="fa fa-clock-o" />Time: 7pm
                  </p>
                  <p>
                    <i className="fa fa-map-marker" />Location: London,UK
                  </p>
                </div>
                <p className="blog_summary">
                  Duis erat purus, tincidunt vel ullamcorper ut, consequat
                  tempus nibh. Proin condimentum risus ligula, dignissim mollis
                  tortor hendrerit vel. Aliquam...
                </p>
                <Link className="blog_readmore" to="/eventssingle">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="single_blog_prevnext">
            <Link to="/#" className="prev_post wow fadeInLeft animated">
              <i className="fa fa-angle-left" />Previous
            </Link>
            <Link to="/#" className="next_post wow fadeInRight animated">
              Next<i className="fa fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsDetail;
