import { Link, NavLink, useLocation } from "react-router-dom";
import icon from "../../images/profile-icon.svg";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  let location = useLocation();
  let requiredPath = location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "profile";

  return (
    requiredPath &&
    <header className={location.pathname === "/" ? "header" : "header header_white"}>
      <Link to="/" className="header__logo"></Link>
      {loggedIn &&
        <nav className="header__menu">
          <NavLink to="/movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Сохранённые фильмы</NavLink>
        </nav>
      }
      <div className="header__profile-container">
        {loggedIn ?
          <Link to="/profile" className="header__profile-link">
            <img src={icon}></img>
            <span>Аккаунт</span>
          </Link> :
          <>
            <Link to="/signup" className="header__profile-signup">Регистрация</Link>
            <Link to="/signin" className="header__profile-signin">Войти</Link>
          </>
        }
      </div>
    </header>
  );
}

export default Header;
