import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <h1>Diversi-Hire</h1>
      </header>
      <Button primary as={Link} to="/applicant_login">
        Login
      </Button>
    </div>
  );
};

export default Home;
