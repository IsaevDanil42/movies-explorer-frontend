import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return(
    <section className="navtab">
      <nav className="navtab__menu">
        <Link className="navtab__link">О проекте</Link>
        <Link className="navtab__link">Технологии</Link>
        <Link className="navtab__link">Студент</Link>
      </nav>
    </section>
  );
};

export default NavTab;
