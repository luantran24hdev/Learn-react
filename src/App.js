import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppRoutes } from "./AppRouters";
import "./assets/style.css";
export default function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}
