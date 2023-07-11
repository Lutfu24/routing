import React from "react";
import Header from "../../../components/Admin/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";

const AdminRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRoot;
