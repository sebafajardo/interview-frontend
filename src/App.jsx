import React from "react";
import Exercise01 from "./exercises/Exercise01";
import Exercise02 from "./exercises/Exercise02";
import Exercise03 from "./exercises/Exercise03";
import './index.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>
        Please take a look at the 3 exercises, each of them contain
        instructions.
      </p>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <div>
        <h1 class="py-4">
          <NavLink activeClassName="current" exact to="/" >FrontEnd Interview Exercises</NavLink>
        </h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink activeClassName="current" to="/exercise01">Exercise 01</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="current" to="/exercise02" >Exercise 02</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="current" to="/exercise03" >Exercise 03</NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Welcome} />
        <Route path="/exercise01" component={Exercise01} />
        <Route path="/exercise02" component={Exercise02} />
        <Route path="/exercise03" component={Exercise03} />
      </div>
    </Router>
  );
};

export default App;
