import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import Routes from "./Routes";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import ApplicantProfile from "./components/ApplicantProfile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApplicantLogin from "./components/ApplicantLogin";

const Routes = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/status">
              Status
            </Link>
          </li>
        </ul>

        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/status/" component={Status} />
          <Route path="/applicant_login" component={ApplicantLogin} />
          <Route
            path="/applicant_create_profile"
            component={ApplicantProfile}
          />
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
