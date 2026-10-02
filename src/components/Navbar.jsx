import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "/src/assets/logo.png"

const Navbar = () => {

  const {totalItems} = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ height:"75px", scale:"2" }} />
          </Link>
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
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link clr-b" aria-current="page" to="/">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link clr-b" aria-current="page" to="/category/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link clr-b" to="/category/women">
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link clr-b" to="/category/jewelery">
                  Jewelary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link clr-b" to="/category/electronics">
                  Elecronics
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="cart-btn position-relative" type="submit" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="offcanvasExample">
                <i className="fa-solid fa-cart-shopping"></i> Cart <span className="py-1 px-1 rounded-circle fw-bolder">({totalItems})</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
