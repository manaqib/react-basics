import React, { Component } from "react";
import Home from "./Components/Home/Home";
import Scholarship from "./Components/Scholarship/Scholarship";
import Cources from "./Components/Course/Cources";
import Events from "./Components/Events/Events";
import EventsSingle from "./Components/Common/EventsSingle";
import Contact from "./Components/Contact/Contact";
import Food from "./Components/Category/Food";
import Technology from "./Components/Category/Technology";
import Fashion from "./Components/Category/Fashion";
import Business from "./Components/Category/Business";
import Games from "./Components/Category/Games";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/scholarship" component={Scholarship} />
          <Route path="/cource" component={Cources} />
          <Route path="/events" component={Events} />
          <Route path="/eventssingle" component={EventsSingle} />
          <Route path="/contact" component={Contact} />
          <Route path="/food" component={Food} />
          <Route path="/technology" component={Technology} />
          <Route path="/fashion" component={Fashion} />
          <Route path="/business" component={Business} />
          <Route path="/games" component={Games} />
        </div>
      </Router>
    );
  }
}

export default Routes;
