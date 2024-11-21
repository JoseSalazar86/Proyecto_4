import React from "react";
import { Outlet} from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default LayoutPublic
