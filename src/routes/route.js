import React from "react";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Coins from "../Pages/Admin/Coins/Coins";
import Home from "../Pages/Site/Home/Home";
import About from "../Pages/Site/About/About";
import Contact from "../Pages/Site/Contact/Contact";
import ReadMap from "../Pages/Site/ReadMap/ReadMap";
import Service from "../Pages/Site/Service/Service";
import Team from "../Pages/Site/Team/Team";
import SiteRoot from "../Pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../Pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "readmap",
        element: <ReadMap />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "coins",
        element: <Coins />,
      },
    ],
  },
];
