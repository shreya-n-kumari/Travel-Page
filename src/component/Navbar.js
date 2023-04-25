import React from "react";
import circle from "../assets/circle.png";
import search from "../assets/search-solid.svg";

import "./Navbar.css";

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            S
            <img className="nav-logo" src={circle} alt="logo" width="5%" color="white" />
            SRILANKA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Media
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <img
                className="search-icon"
                src={search}
                alt="search"
                width="8%"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
  );
};
