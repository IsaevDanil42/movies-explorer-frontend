import { Link, NavLink } from "react-router-dom";
import icon from "../../images/profile-icon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__menu">
        <NavLink to="/movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Сохранённые фильмы</NavLink>
      </nav>
      <div className="header__profile-container">
        <Link to="/profile" className="header__profile-link">
          <img src={icon}></img>
          <span>Аккаунт</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
