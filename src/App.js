import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard.js";
import { AppRoutes } from "./AppRouters";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import "./assets/style.css";

export default function App() {
  // const isRenderTopHeader = () => {
  //   let arrRouter = ["/user"];
  //   let routerName = location.pathname;

  //   if (arrRouter.some((route) => routerName.includes(route))) return true;

  //   return false;
  // };
  // console.log("=========isRenderHeader", isRenderHeader());
  return (
    <div className="App">
      <Dashboard></Dashboard>
      {/* {isRenderTopHeader() && <TopHeader />} */}
      {/* {isRenderHeader() && <Header />}
      <AppRoutes />
      <Footer /> */}
    </div>
  );
}
