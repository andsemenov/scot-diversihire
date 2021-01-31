import React from "react";
import { withRouter } from "react-router";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import { Segment, List } from "semantic-ui-react";
import "./style.css";

const MenuHeader = ({ location }) => {
  const pathName = location && location.pathname;
  return (
    <Segment className="header-all">
      <p className="logo">DIVERSIHIRE</p>

      {/* Home */}
      {pathName === "/" && (
        <List className="buttons-block">
          <List.Item>
            <CustomButton title="SIGN UP" as={Link} to="/signup" />
          </List.Item>
          <List.Item>
            <CustomButton title="LOGIN" as={Link} to="/login" />
          </List.Item>
        </List>
      )}

      {/* Login, ApplicantInbox, SignUp */}
      {(pathName === "/login" || pathName === "/signup") && (
        <Segment className="header-nav">
          <List className="link-block">
            <List.Item to="" as={Link}>
              FEATURES
            </List.Item>

            <List.Item to="" as={Link}>
              SUPPORT
            </List.Item>
          </List>

          <List className="buttons-block">
            <List.Item>
              <CustomButton title="LOGIN" as={Link} to="/login" />
            </List.Item>
          </List>
        </Segment>
      )}

      {/* ApplicantProfile, ApplicantsList, SuccessMessage, ViewApplicantProfile */}
      {(pathName === "/applicant-create-profile" ||
        pathName === "/public-applicant-profiles" ||
        pathName === "/profile-creation-successful" ||
        pathName === "/applicant-inbox" ||
        pathName === "/public-applicant-profiles/:id") && (
        <Segment className="header-nav">
          <List className="link-block">
            <List.Item to="" as={Link}>
              FEATURES
            </List.Item>

            <List.Item to="" as={Link}>
              SUPPORT
            </List.Item>
          </List>

          <List className="buttons-block">
            <List.Item>
              <CustomButton
                title="LOGOUT"
                onClick={() => {
                  console.log("hey");
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                }}
                as={Link}
                to="/login"
              />
            </List.Item>
          </List>
        </Segment>
      )}
    </Segment>
  );
};

export default withRouter(MenuHeader);
