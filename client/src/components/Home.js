import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <header className="home-header">
        <h1>Diversi-Hire</h1>
        <CustomButton title="LOGIN" as={Link} to="/login" />
        <CustomButton title="SIGN UP" as={Link} to="/signup" />
      </header>
    </div>
  );
};

export default Home;
