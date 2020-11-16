import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import MenuHeader from "./components/MenuHeader";
import Login from "./components/Login";
import ApplicantProfile from "./components/ApplicantProfile";
import SuccessMessage from "./components/SuccessMessage";
import ApplicantPublicProfile from "./components/ApplicantPublicProfile";

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
        path="/public_applicant_profiles/" /* {public_id} */
        component={ApplicantPublicProfile}
      />
    </Router>
  );
};

export default Routes;
