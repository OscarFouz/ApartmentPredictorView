// src/layout/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/properties" className={({isActive}) => isActive ? "active" : ""}>
              Propiedades
            </NavLink>
          </li>

          <li>
            <NavLink to="/owners" className={({isActive}) => isActive ? "active" : ""}>
              Owners
            </NavLink>
          </li>

          <li>
            <NavLink to="/reviewers" className={({isActive}) => isActive ? "active" : ""}>
              Reviewers
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
