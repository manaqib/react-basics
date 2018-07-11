import React, { Component } from "react";

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import blogPic from "../../resources/img/blog.jpg";
import singlePic from "../../resources/img/events-slider3.jpg";
import CourcesNews from "../Common/CourcesNews";

class EventsSingle extends Component {
  render() {
    return (
      <div>
        <section id="imgBanner">
          <h2>Events Single </h2>
        </section>
        <section id="courseArchive">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="courseArchive_content">
                  <div className="row">
                    <div className="col-lg-12 col-12 col-sm-12">
                      <div className="single_blog">
                        <div className="events_slider_area">
                          <div className="events_slider">
                            <div>
                              <img src={singlePic} alt="img" />
                            </div>
                          </div>
                        </div>

                        <h2 className="blog_title">
                          <Link to="/#">
                            Curabitur ac dictum nisl eu hendrerit ante
                          </Link>
                        </h2>
                        <div className="blog_commentbox">
                          <p>
                            <i className="fa fa-clock-o" />Time: 7pm,15 March
                            2015
                          </p>
                          <p>
                            <i className="fa fa-map-marker" />Location:
                            London,UK
                          </p>
                        </div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                        <blockquote>
                          <span className="fa fa-quote-left" />
                          Duis erat purus, tincidunt vel ullamcorper ut,
                          consequat tempus nibh. Proin condimentum risus ligula,
                          dignissim mollis tortor hendrerit vel.
                        </blockquote>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin
                          words, combined with a handful of model sentence
                          structures, to generate Lorem Ipsum which looks
                          reasonable. The generated Lorem Ipsum is therefore
                          always free from repetition, injected humour, or
                          non-characteristic words etc.
                        </p>

                        <h3>This is example of H3</h3>
                        <h4>This is example of H4</h4>
                        <h5>This is example of H5</h5>
                        <h6>This is example of H6</h6>

                        <ul>
                          <li>
                            <span className="fa fa-angle-double-right" />There
                            are many variations of passages
                          </li>
                          <li>
                            <span className="fa fa-angle-double-right" />Lorem
                            Ipsum generators
                          </li>
                          <li>
                            <span className="fa fa-angle-double-right" />There
                            are many variations of passages
                          </li>
                          <li>
                            <span className="fa fa-angle-double-right" />The
                            uses a dictionary of over 200 Latin words
                          </li>
                          <li>
                            <span className="fa fa-angle-double-right" />Proin
                            condimentum risus ligula
                          </li>
                        </ul>
                      </div>

                      <div className="single_blog_prevnext">
                        <Link className="prev_post wow fadeInLeft" to="/#">
                          <i className="fa fa-angle-left" />Previous Event
                        </Link>
                        <Link className="next_post wow fadeInRight" to="/#">
                          Next Event<i className="fa fa-angle-right" />
                        </Link>
                      </div>
                    </div>

                    <div className="related_post">
                      <h2>More Events</h2>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="single_blog_archive wow fadeInUp">
                            <div className="blogimg_container">
                              <Link className="blog_img" to="#">
                                <img src={blogPic} alt="img" />
                              </Link>
                            </div>
                            <h2 className="blog_title">
                              <Link to="/#">
                                Curabitur ac dictum nisl eu hendrerit ante
                              </Link>
                            </h2>
                            <div className="blog_commentbox">
                              <p>
                                <i className="fa fa-clock-o" />Time: 7pm,15
                                March 2015
                              </p>
                              <p>
                                <i className="fa fa-map-marker" />Location:
                                London,UK
                              </p>
                            </div>
                            <p className="blog_summary">
                              Duis erat purus, tincidunt vel ullamcorper ut,
                              consequat tempus nibh. Proin condimentum risus
                              ligula, dignissim mollis tortor hendrerit vel.
                              Aliquam...
                            </p>
                            <Link to="/#" className="blog_readmore">
                              Read More
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="single_blog_archive wow fadeInUp">
                            <div className="blogimg_container">
                              <Link className="blog_img" to="/#">
                                <img src={blogPic} alt="img" />
                              </Link>
                            </div>
                            <h2 className="blog_title">
                              <Link to="/#">
                                Curabitur ac dictum nisl eu hendrerit ante
                              </Link>
                            </h2>
                            <div className="blog_commentbox">
                              <p>
                                <i className="fa fa-clock-o" />Time: 7pm,15
                                March 2015
                              </p>
                              <p>
                                <i className="fa fa-map-marker" />Location:
                                London,UK
                              </p>
                            </div>
                            <p className="blog_summary">
                              Duis erat purus, tincidunt vel ullamcorper ut,
                              consequat tempus nibh. Proin condimentum risus
                              ligula, dignissim mollis tortor hendrerit vel.
                              Aliquam...
                            </p>
                            <Link to="/#" className="blog_readmore">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CourcesNews />
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default EventsSingle;
