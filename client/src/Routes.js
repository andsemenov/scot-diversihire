import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuHeader from "./components/MenuHeader";
import Login from "./components/Login";
import ApplicantProfile from "./components/ApplicantProfile";
import SuccessMessage from "./components/SuccessMessage";
import ViewApplicantProfile from "./components/ViewApplicantProfile";
import ApplicantsList from "./components/ApplicantsList";

const Routes = () => {
  return (
    <Router>
      <MenuHeader />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/status/" component={Status} />
      <Route path="/login" component={Login} />
      <Route path="/applicant_create_profile" component={ApplicantProfile} />
      <Route path="/profile_creation_successful" component={SuccessMessage} />
      <Route
        exact
        path="/public_applicant_profiles"
        component={ApplicantsList}
      />
      <Route
        exact
        path="/public_applicant_profiles/:id"
        component={ViewApplicantProfile}
      />
    </Router>
  );
};

export default Routes;
