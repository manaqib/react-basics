import React, { Component } from "react";
import { Link } from "react-router-dom";
import newsPic from "../../resources/img/news.jpg";
import Notice from "../../resources/img/notice.jpg";

class News extends Component {
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="newsfeed_area wow fadeInRight">
          <ul className="nav nav-tabs feed_tabs" id="myTab2">
            <li className="active">
              <Link to="/#news" data-toggle="tab">
                News
              </Link>
            </li>
            {/* <li>
              <Link to="/#notice" data-toggle="tab">
                Notice
              </Link>
            </li>
            <li>
              <Link to="/#events" data-toggle="tab">
                Events
              </Link>
            </li> */}
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade in active" id="news">
              <ul className="news_tab">
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">27.02.15</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">28.02.15</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">28.02.15</span>
                    </div>
                  </div>
                </li>
              </ul>
              <Link className="see_all" to="/#">
                See All
              </Link>
            </div>

            <div className="tab-pane fade " id="notice">
              <div className="single_notice_pane">
                <ul className="news_tab">
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={newsPic}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Dummy text of the printing and typesetting industry
                        </Link>
                        <span className="feed_date">27.02.15</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={Notice}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Dummy text of the printing and typesetting industry
                        </Link>
                        <span className="feed_date">28.02.15</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={Notice}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Dummy text of the printing and typesetting industry
                        </Link>
                        <span className="feed_date">28.02.15</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="news_tab">
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={Notice}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </Link>
                        <span className="feed_date">27.02.15</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={Notice}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Dummy text of the printing and typesetting industry
                        </Link>
                        <span className="feed_date">28.02.15</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <Link className="news_img" to="/#">
                          <img
                            className="media-object"
                            src={Notice}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <Link to="/#">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text
                        </Link>
                        <span className="feed_date">28.02.15</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-pane fade " id="events">
              <ul className="news_tab">
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">27.02.15</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">28.02.15</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media">
                    <div className="media-left">
                      <Link className="news_img" to="/#">
                        <img className="media-object" src={newsPic} alt="img" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to="/#">
                        Dummy text of the printing and typesetting industry
                      </Link>
                      <span className="feed_date">28.02.15</span>
                    </div>
                  </div>
                </li>
              </ul>
              <Link className="see_all" to="/#">
                See All
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
