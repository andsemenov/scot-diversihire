import React from "react";
import { Segment, Header } from "semantic-ui-react";
import "./style.css";

const Banner = () => (
  <Segment className="banner">
    <Header as="h1" className="slogan">
      Now there’s a better way to Do your recruitment
    </Header>
  </Segment>
);

export default Banner;
