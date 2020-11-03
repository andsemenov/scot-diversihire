import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";

const Routes = () => {
  return (
    <Router>
      <div>
        <List link>
          <List.Item to="/" active as={Link}>
            Home
          </List.Item>
          <List.Item to="/about" as={Link}>
            About
          </List.Item>
          <List.Item to="/status" as={Link}>
            Status
          </List.Item>
        </List>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/status/" component={Status} />
        </div>
      </div>
    </Router>
  );
};

export default Routes;
