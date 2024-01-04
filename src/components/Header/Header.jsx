import { Link, NavLink, useLocation } from "react-router-dom";
import icon from "../../images/profile-icon.svg";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isModile, setIsModile] = useState(false);
  const [isNavHiden, setNavHiden] = useState(true);
  let location = useLocation();
  let requiredPath = location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile";

  function handleResize() {
    if (window.innerWidth < 1160) {
      setIsModile(true);
    } else {
      setIsModile(false);
    }
  }

  function handleMenu() {
    setNavHiden(!isNavHiden);
  }

  useEffect(() => {
    handleResize();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  return (
    requiredPath &&
    <header className={location.pathname === "/" ? "header" : "header header_white"}>
      <div className="header__container">
        <Link to="/" className="header__logo"></Link>
        {loggedIn && !isModile &&
          <nav className="header__menu">
            <NavLink to="/movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Сохранённые фильмы</NavLink>
          </nav>
        }
        <div className={loggedIn ? "header__profile-container" : "header__profile-container header__profile-container_logout"}>
          {loggedIn ?
            <>
              {!isModile ?
                <Link to="/profile" className="header__profile-link">
                  <img src={icon} alt="Иконка аккаунта"></img>
                  <span>Аккаунт</span>
                </Link> :
                <>
                  <button className={isNavHiden ? "header__burger-button" : "header__burger-button header__burger-button_close"} onClick={handleMenu}></button>
                  {!isNavHiden &&
                    <div className="header__burger-background">
                      <nav className="header__burger-menu">
                        <div className="header__burger-link-container">
                          <NavLink to="/" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Главная</NavLink>
                          <NavLink to="/movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Фильмы</NavLink>
                          <NavLink to="/saved-movies" className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_active" : ""}`}>Сохранённые фильмы</NavLink>
                        </div>
                        <Link to="/profile" className="header__profile-link">
                          <img src={icon}></img>
                          <span>Аккаунт</span>
                        </Link>
                      </nav>
                    </div>

                  }
                </>
              }
            </> :
            <>
              <Link to="/signup" className="header__profile-signup">Регистрация</Link>
              <Link to="/signin" className="header__profile-signin">Войти</Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
