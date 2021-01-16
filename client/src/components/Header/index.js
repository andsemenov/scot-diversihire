import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

import { Segment, List } from "semantic-ui-react";
import "./style.css";

const Header = () => (
  <Segment className="header-all">
    <p className="logo">DIVERSIHIRE</p>
    <List className="buttons-block">
      <List.Item>
        <CustomButton title="SIGN UP" as={Link} to="/signup" />
      </List.Item>
      <List.Item>
        <CustomButton title="LOGIN" as={Link} to="/login" />
      </List.Item>
    </List>
  </Segment>
);

export default Header;
