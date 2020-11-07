import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuHeader from "./components/MenuHeader";
import ApplicantLogin from "./components/ApplicantLogin";
import SuccessMessage from "./components/SuccessMessage";

const Routes = () => {
  return (
    <Router>
      <MenuHeader />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/status/" component={Status} />
      <Route path="/applicant_login" component={ApplicantLogin} />
      <Route path="/profile_creation_successful" component={SuccessMessage} />
    </Router>
  );
};

export default Routes;
