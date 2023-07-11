import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Site/Header/Header";
import Footer from "../../../components/Site/Footer/Footer";

const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteRoot;
