import React, { useState } from "react";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/menu/Navbar";
import SearchBar from "../components/searchbar/SearchBar";

const MainLayout = ({ children }) => {
  return (
    <div className="font-quicksand ">
      <Navbar/>
      <SearchBar />
      {children}
      <Footer />
      
    </div>
  );
};

export default MainLayout;
