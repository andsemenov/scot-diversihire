import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles/Home.css";
import "../styles/buttonStyling.css";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <h1>Diversi-Hire</h1>
        <div className="button-style">
          <Button fluid primary as={Link} to="/login">
            LOGIN{" "}
          </Button>
        </div>
        <div className="button-style">
          <Button fluid primary as={Link} to="/signup">
            SIGN UP{" "}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
