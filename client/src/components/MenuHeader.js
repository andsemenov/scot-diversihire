import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

const MenuHeader = ({ location }) => {
  const pathName = location && location.pathname;
  return (
    <List link>
      <List.Item to="/" active={pathName === "/"} as={Link}>
        Home
      </List.Item>
      <List.Item to="/about" active={pathName === "/about"} as={Link}>
        About
      </List.Item>
      <List.Item to="/status" active={pathName === "/status"} as={Link}>
        Status
      </List.Item>
    </List>
  );
};

export default withRouter(MenuHeader);
