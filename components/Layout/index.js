import React from "react";
import { modalRootId } from "../Modal";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="grid-container">{children}</main>
      <div id={modalRootId} />
      <Footer />
    </div>
  );
};

export default Layout;
