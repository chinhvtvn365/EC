import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/product/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      {/* Top Header */}
      <div className="container-fluid header-nav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="navLeft">
            <Link to="/" className="navbar-brand" >VesFarm</Link>
            <p>Clean agricultural products standard vietgap process</p>
          </div>
          <div className="navRight">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#vesNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="vesNav">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" >Home</Link>
                <Link to="/product" className="nav-link" >Product</Link>
                <Link className="nav-link" to="" >Store</Link>
                <Link className="nav-link nav-after" to="" >Standard process</Link>
                <Link to="/cart" className="nav-link" >Cart</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row mt-3">
                <div className="col-6 d-flex align-items-center">

                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {
                    userInfo ? (
                      <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
  
                        <Link className="dropdown-item" to="#"
                        onClick={logoutHandler}>
                          Logout
                        </Link>
                      </div>
                    </div>
                    )
                    : (
                      <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
  
                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                    )
                  }

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center header-input">
                <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row mt-3">
              <div className="col-md-3 col-4 d-flex align-items-center">

              </div>
              <div className="col-md-6 col-8 d-flex align-items-center header-input">
              <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {
                  userInfo ? (
                    <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
  
                      <Link className="dropdown-item" to="#"
                      onClick={logoutHandler}>
                        Logout
                      </Link>
                    </div>
                  </div>
                  )
                  : (
                    <>
                      <Link to="/register">Register</Link>
                      <Link to="/login">Login</Link>
                    </>
                  )
                }


                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
