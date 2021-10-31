import React from "react";
import { Link } from "react-router-dom";
import BackImage from "../images/flower.jpg";
import "../style/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="headerContainer">
        <p>Wedding Flowers & Bouquets</p>
        <p> Weddings</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
