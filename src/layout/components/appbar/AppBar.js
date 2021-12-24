import React from "react";
import "./appbar.scss";

function AppBar() {
  return (
    <header className="appbar w-full">
      <ul className="navbar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Update profile</a>
        </li>
      </ul>
    </header>
  );
}

export default AppBar;
