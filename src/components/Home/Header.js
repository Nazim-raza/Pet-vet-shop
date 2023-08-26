import React from "react";
import "../Home/Home.css";

const Header = () => {
  return (
    <div>
      {/* header */}
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-paw" /> Pet-Vet
        </a>
        <nav className="navbar">
          <a href="/">home</a>
          <a href="#about">about</a>
          <a href="#gallery">gallery</a>
          <a href="#animal">animal</a>
          <a href="#contact">contact</a>
          <a href="/login">Login</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
