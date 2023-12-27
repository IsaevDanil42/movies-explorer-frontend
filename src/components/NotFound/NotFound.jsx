import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return(
    <main className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link className="notFound__backLink"  to={-1}>Назад</Link>
    </main>
  )
}

export default NotFound;
