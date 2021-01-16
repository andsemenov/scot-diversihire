import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { Segment, Divider, Icon, Menu } from "semantic-ui-react";
import "./style.css";

const Footer = () => (
  <Segment className="footer-all">
    <Segment className="footer-content">
      <Segment className="footer-top">
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
        <Segment className="social-media">
          <p className="follow-us">FOLLOW US</p>
          <Menu className="social-icons" horizontal>
            <Menu.Item href="http://" target="_blank">
              <Icon name="instagram" size="big" />
            </Menu.Item>
            <Menu.Item href="http://" target="_blank">
              <Icon name="twitter" size="big" />
            </Menu.Item>
            <Menu.Item href="http://" target="_blank">
              <Icon name="facebook f" size="big" />
            </Menu.Item>
            <Menu.Item href="http://" target="_blank">
              <Icon name="youtube" size="big" />
            </Menu.Item>
          </Menu>
        </Segment>
      </Segment>
      <Divider className="divider" horizontal />
      <Segment className="footer-bottom">
        <Segment className="language-block">
          <p className="language">LANGUAGE:</p>
          <p className="language-value">ENGLISH</p>
        </Segment>
      </Segment>
    </Segment>
  </Segment>
);

export default Footer;
