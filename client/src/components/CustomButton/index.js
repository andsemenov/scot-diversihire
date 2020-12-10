import React from "react";
import { Button } from "semantic-ui-react";
import "./style.css";

const CustomButton = ({
  title,
  type,
  onClick,
  disabled,
  as,
  to,
  key,
  fluid,
  positive
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      as={as}
      to={to}
      key={key}
      className="custom-button"
      fluid={fluid}
      positive={positive}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
