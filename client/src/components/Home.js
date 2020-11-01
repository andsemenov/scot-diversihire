import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles/Home.css";
import "semantic-ui-css/semantic.min.css";

const Home = () => {
  const history = useHistory();

  function loginClick() {
    history.push("/applicant_login");
  }

  return (
    <div>
      <header className="home-header">
        <h1>Diversi-Hire</h1>
      </header>
      <Button primary onClick={loginClick}>
        I am an applicant
      </Button>
    </div>
  );
};

export default Home;
