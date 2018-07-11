import React, { Component } from "react";
import newsPic from "../../resources/img/news.jpg";
import sideAd from "../../resources/img/side-add.jpg";
import { Link } from "react-router-dom";

const Tags = ({ tags, onDelete }) => {
  return (
    <ul className="tags_nav">
      {tags.map((tag, index) => (
        <li key={index}>
          <a className="tagClose" onClick={() => onDelete(tag)}>
            X
          </a>
          <Link to="/#">
            <i className="fa fa-tags" />
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

class CorurcesNews extends Component {
  courseItteration() {
    return courseNewsLoop.map((item, index) => {
      return (
        <div key={index}>
          <li>
            <div className="media">
              <div className="media-left">
                <Link to="/#" className="news_img">
                  <img alt="img" src={newsPic} className="media-object" />
                </Link>
              </div>
              <div className="media-body">
                <Link to="/#">{item.newsdetails}</Link>
                <span className="feed_date">{item.newsdate}</span>
              </div>
            </div>
          </li>
        </div>
      );
    });
  }

  constructor() {
    super();
    this.state = {
      show: true,
      tags: []
    };
  }

  handleTagDelete = tag => {
    const tags = this.state.tags.filter(item => tag !== item);
    this.setState({ tags });
  };

  componentDidMount() {
    const tags = [
      "Creative",
      "News",
      "Technology",
      "Art",
      "Audio",
      "Video",
      "Food",
      "Water",
      "Games",
      "Swimming",
      "Indoor Games"
    ];
    this.setState({ tags });
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="courseArchive_sidebar">
          <div className="single_sidebar">
            <h2>
              {this.props.coursetitle}
              <span className="fa fa-angle-double-right" />
            </h2>
            <ul className="news_tab"> {this.courseItteration()} </ul>
          </div>

          <div className="single_sidebar">
            <h2>
              {this.props.catTitle}
              <span className="fa fa-angle-double-right" />
            </h2>
            <ul>{catItteration}</ul>
          </div>

          <div className="single_sidebar">
            <h2>
              {this.props.tagsTitle}
              <span className="fa fa-angle-double-right" />
            </h2>
            <Tags tags={tags} onDelete={this.handleTagDelete} />
          </div>

          <div className="single_sidebar">
            <h2>
              {this.props.sponsorTitle}
              <span className="fa fa-angle-double-right" />
            </h2>
            <Link className="side_add" to="/#">
              <img src={sideAd} alt="img" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const courseNewsLoop = [
  {
    newsdetails: "Dummy text of the printing and typesetting industry",
    newsdate: "27.02.15"
  },
  {
    newsdetails: "Dummy text of the printing and typesetting industry",
    newsdate: "27.02.15"
  },
  {
    newsdetails: "Dummy text of the printing and typesetting industry",
    newsdate: "27.02.15"
  }
];

const categories = [
  {
    catLabel: "Food",
    link: "food",
    id: "1"
  },
  {
    catLabel: "Technology",
    link: "technology",
    id: "2"
  },
  {
    catLabel: "Fashion",
    link: "fashion",
    id: "3"
  },
  {
    catLabel: "Business",
    link: "business",
    id: "4"
  },
  {
    catLabel: "Games",
    link: "games",
    id: "5"
  }
];

const catItteration = categories.map(items => (
  <li key={items.id}>
    <Link to={`/${items.link}`}>{items.catLabel}</Link>
  </li>
));

export default CorurcesNews;
