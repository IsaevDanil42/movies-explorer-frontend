import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movies, limit, maxLimit, handleAddRow, handleLike, likedMovies }) {
  let location = useLocation();

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {movies.map((movie, index) => {
          if (limit > index && location.pathname === "/movies") {
            return <MoviesCard key={movie.id} movie={movie} handleLike={handleLike} isLiked={likedMovies.some(i => i.movieId === movie.id)} />
          } else if (location.pathname === "/saved-movies") {
            return <MoviesCard key={movie.id} movie={movie} handleLike={handleLike} isLiked={true} />
          }
        }
        )}
      </div>
      <div className={location.pathname === "/movies" ? "movies-card-list__devider" : "movies-card-list__devider movies-card-list__devider_alternative"}>
        {(location.pathname === "/movies" && movies.length > maxLimit) && <button className="movies-card-list__more-button" onClick={handleAddRow}>Ещё</button>}
      </div>
    </section>
  )
}

export default MoviesCardList;
