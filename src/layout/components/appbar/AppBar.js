import React from "react";
import "./appbar.scss";

function AppBar() {
  return (
    <header className="appbar w-full">
      <nav className="navbar">
        <h2 className="font-bold text-lg logo">
          <img src="/github.png" alt="" />
          <span>Github</span>
        </h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile">Update profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppBar;
