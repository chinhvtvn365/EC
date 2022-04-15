import React from "react";
import Header from "./../components/Header";
import Homepage from "./../components/homeComponents/Homepage";
import Footer from "./../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default HomeScreen;
