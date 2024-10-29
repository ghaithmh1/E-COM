import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcShop } from "react-icons/fc";
import './Header.css'; 

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <FcShop />
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarScroll" 
            aria-controls="navbarScroll" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Products" className="nav-link">Products</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink 
                  to="/" 
                  className="nav-link dropdown-toggle" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Link
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="/action" className="dropdown-item">Action</NavLink></li>
                  <li><NavLink to="/another-action" className="dropdown-item">Another action</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink to="/something-else" className="dropdown-item">Something else here</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Link</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button className="btn btn-outline-success me-2" type="submit">Search</button>
            </form>
            <NavLink to="/Register" className="nav-link custom-link me-3">Register</NavLink>
            <NavLink to="/Login" className="nav-link custom-link">Login</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
