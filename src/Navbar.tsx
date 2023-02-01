import { NavLink } from "react-router-dom";

import "./styles.css";

export function NavBar() {
    return (
      <nav className="navbar-container">
        <NavLink to="/">
          Primitive Reflexes
        </NavLink>
        <NavLink to="/diary">Diary</NavLink>
        <NavLink to="/myaccount">My Account</NavLink>
      </nav>
    );
  }
  