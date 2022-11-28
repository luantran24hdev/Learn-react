import React from "react";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import { AppRoutes } from "./AppRouters";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import "./assets/style.css";
export default function App() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const location = useLocation();
  const isRenderHeader = () => {
    let arrRouter = ["/login", "/register", "/admin", "/user"];
    let routerName = location.pathname;
    console.log("routerName", routerName);
    console.log(
      "arrRouter.indexOf(routerName)",
      arrRouter.some((route) => routerName.includes(route))
    );
    if (arrRouter.some((route) => routerName.includes(route))) return false;

    return true;
  };

  const isRenderTopHeader = () => {
    let arrRouter = ["/admin", "/user"];
    let routerName = location.pathname;
    // if router == admin ---> only admin will have topHeader
    if (arrRouter.indexOf(routerName) !== -1) return false;

    return true;
  };
  console.log("=========isRenderHeader", isRenderHeader());
  return (
    <div className="App">
      <TopHeader isRenderTopHeader={isRenderTopHeader()} />
      {isRenderHeader() && <Header />}
      <AppRoutes />
      <Footer />
      <Loading isLoading={isLoading} />
    </div>
  );
}
