import React from "react";
import AppBar from "./components/appbar/AppBar";
import Sidebar from "./components/sidebar/Sidebar";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <AppBar />

      <aside className="navigation w-full">
        <Sidebar />
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}

export default Layout;
