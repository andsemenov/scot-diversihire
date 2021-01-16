import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuHeader from "./components/MenuHeader";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ApplicantProfile from "./components/ApplicantProfile";
import SuccessMessage from "./components/SuccessMessage";
import ViewApplicantProfile from "./components/ViewApplicantProfile";
import ApplicantsList from "./components/ApplicantsList";
import ApplicantInbox from "./components/ApplicantInbox";

const Routes = () => {
  return (
    <Router>
      {/*   <MenuHeader /> */}
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/status/" component={Status} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/applicant-create-profile" component={ApplicantProfile} />
      <Route path="/profile-creation-successful" component={SuccessMessage} />
      <Route path="/applicant-inbox" component={ApplicantInbox} />
      <Route
        exact
        path="/public-applicant-profiles"
        component={ApplicantsList}
      />
      <Route
        exact
        path="/public-applicant-profiles/:id"
        component={ViewApplicantProfile}
      />
    </Router>
  );
};

export default Routes;
