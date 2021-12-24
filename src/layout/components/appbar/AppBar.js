import React from "react";
import "./appbar.scss";

function AppBar() {
  return (
    <header className="appbar w-full">
      <nav className="navbar">
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
