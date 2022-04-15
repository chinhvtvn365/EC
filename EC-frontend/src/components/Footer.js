import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width={180} className="mb-3" />
          <p className="font-italic text-muted">"We strongly believe that, in the near future, all Vietnamese people will be able to eat safe food and many will choose organic food as a way of life."</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><Link to="" target="_blank" title="twitter"><i className="fab fa-twitter" /></Link></li>
            <li className="list-inline-item"><Link to="" target="_blank" title="facebook"><i className="fab fa-facebook-f" /></Link></li>
            <li className="list-inline-item"><Link to="" target="_blank" title="instagram"><i className="fab fa-instagram" /></Link></li>
            <li className="list-inline-item"><Link to="" target="_blank" title="pinterest"><i className="fab fa-pinterest-p" /></Link></li>
            <li className="list-inline-item"><Link to="" target="_blank" title="gmail"><i className="fab fa-google" /></Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Products</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><Link to=""  className="text-muted">Fresh fruits</Link></li>
            <li className="mb-2"><Link to=""  className="text-muted">Fresh food</Link></li>
            <li className="mb-2"><Link to=""  className="text-muted">Dry food</Link></li>
            <li className="mb-2"><Link to=""  className="text-muted">Our products</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Stores</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><Link to="/login" className="text-muted">Login</Link></li>
            <li className="mb-2"><Link to="/register" className="text-muted">Register</Link></li>
            <li className="mb-2"><Link to="" className="text-muted">Our stores</Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
          <p className="text-muted mb-4">If you have problems shopping at VesFarm, Please contact 012 34 356 for timely support.</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="coppyRight py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2022 VesFarm - Clean agricultural products standard Vietgap process</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
