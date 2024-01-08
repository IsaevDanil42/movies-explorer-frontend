import "./NavTab.css";

function NavTab() {
  return(
    <section className="navtab">
      <nav className="navtab__menu">
        <a className="navtab__link" href="#aboutProject">О проекте</a>
        <a className="navtab__link" href="#techs">Технологии</a>
        <a className="navtab__link" href="#aboutMe">Студент</a>
      </nav>
    </section>
  );
};

export default NavTab;
