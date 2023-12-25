import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">&copy; 2023</p>
      <div className="footer__links">
        <Link className="footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</Link>
        <Link className="footer__link" to="https://github.com/IsaevDanil42/movies-explorer-frontend" target="_blank">Github</Link>
      </div>
    </footer>
  );
}

export default Footer;
