import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
