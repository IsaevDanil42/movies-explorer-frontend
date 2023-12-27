import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  let location = useLocation();

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard></MoviesCard>
      </div>
      <div className={location.pathname === "/movies" ? "movies-card-list__devider" : "movies-card-list__devider_alternative"}>
        {location.pathname === "/movies" && <button className="movies-card-list__more-button">Ещё</button>}
      </div>
    </section>
  )
}

export default MoviesCardList;
