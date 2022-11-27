import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppRoutes } from "./AppRouters";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import "./assets/style.css";
export default function App() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
      <Loading isLoading= {isLoading}/>
    </div>
  );
}
