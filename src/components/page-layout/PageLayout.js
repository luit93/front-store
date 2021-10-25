import React from "react";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Banner />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
