import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="menu_area">
          <nav
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <Link className="navbar-brand" to="/">
                  WpF <span>Degree</span>
                </Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul
                  id="top-menu"
                  className="nav navbar-nav navbar-right main-nav"
                >
                  <li>
                    <Link to="./">Home</Link>
                  </li>
                  <li>
                    <Link to="/cource">Course</Link>
                  </li>
                  <li>
                    <Link to="/scholarship">Scholarship</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
