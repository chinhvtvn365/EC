import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Header = () => {
  const [keyword, setKeyword] = useState();
  let history = useHistory();
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
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row mt-3">
                <div className="col-6 d-flex align-items-center">

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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
