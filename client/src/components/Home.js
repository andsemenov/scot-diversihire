import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <h1>Diversi-Hire</h1>
        <div>
          <Button fluid primary as={Link} to="/login">
            Login{" "}
          </Button>
          <Button fluid primary as={Link} to="/signup">
            Sign Up{" "}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
