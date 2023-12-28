import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return(
    <main className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className="not-found__backLink"  to={-1}>Назад</Link>
    </main>
  )
}

export default NotFound;
