import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { logout } from "../Redux/Actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }

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
              <div className=" d-flex align-items-center justify-content-end Login-Register">
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
        </nav>
      </div>
    </div>
  );
};

export default Header;
