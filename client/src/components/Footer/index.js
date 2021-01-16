import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { Segment, Divider, Button } from "semantic-ui-react";
import "./style.css";

const Footer = () => (
  <Segment className="wrapper">
    <Segment className="footer-all">
      <Segment.Group horizontal className="footer-content">
        <Segment>
          <List className="custom-list" horizontal>
            <List.Item to="" as={Link}>
              TERMS & CONDITIONS
            </List.Item>

            <List.Item to="" as={Link}>
              PRIVACY POLICY
            </List.Item>

            <List.Item to="" as={Link}>
              COOKIE POLICY
            </List.Item>

            <List.Item to="" as={Link}>
              CONTACT US
            </List.Item>
          </List>
        </Segment>
        {/*  <Segment className="media-block">
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column className="follow-us">
                <h5>FOLLOW US</h5>
              </Grid.Column>
              <Grid.Column className="social-icons">
                <Button icon="instagram" inverted />
                <Button icon="twitter" inverted />
                <Button icon="facebook" inverted />
                <Button icon="youtube" inverted />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        <Segment.Group className="media-block">
          {/*     <Grid.Row columns={2}> */}
          <Segment className="follow-us">
            <h5>FOLLOW US</h5>
          </Segment>
          <Segment className="social-icons">
            <Button icon="instagram" inverted />
            <Button icon="twitter" inverted />
            <Button icon="facebook" inverted />
            <Button icon="youtube" inverted />
          </Segment>
          {/*  </Grid.Row> */}
        </Segment.Group>
      </Segment.Group>
      <Divider className="divider" horizontal />

      <Segment className="footer-bottom">
        <List horizontal>
          <List.Item>LANGUAGE:</List.Item>

          <List.Item>ENGLISH</List.Item>
        </List>
      </Segment>
    </Segment>
  </Segment>
);

export default Footer;
