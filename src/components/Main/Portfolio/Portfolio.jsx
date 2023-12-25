import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return(
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <Link className="portfolio__link" to="https://github.com/IsaevDanil42/how-to-learn" target="_blank">
        <p className="portfolio__link-title">Статичный сайт</p>
        <div className="portfolio__link-icon"></div>
      </Link>
      <Link className="portfolio__link" to="https://github.com/IsaevDanil42/russian-travel" target="_blank">
        <p className="portfolio__link-title">Адаптивный сайт</p>
        <div className="portfolio__link-icon"></div>
      </Link>
      <Link className="portfolio__link" to="https://github.com/IsaevDanil42/react-mesto-auth" target="_blank">
        <p className="portfolio__link-title">Одностраничное приложение</p>
        <div className="portfolio__link-icon"></div>
      </Link>
    </section>
  );
};

export default Portfolio;
