import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({ movies, limit, maxLimit, handleAddRow, handleLike, likedMovies, searchError, isLoading}) {
  let location = useLocation();

  return (
    <section className="movies-card-list">
      {searchError && !isLoading && <span className="movies-card-list__searchError">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>}
      {isLoading && <Preloader></Preloader>}
      {!searchError && !isLoading &&
        <div className="movies-card-list__container">
          {movies.map((movie, index) => {
            if (limit > index && location.pathname === "/movies") {
              return <MoviesCard key={movie.id} movie={movie} handleLike={handleLike} isLiked={likedMovies.some(i => i.movieId === movie.id)} />
            } else if (location.pathname === "/saved-movies") {
              return <MoviesCard key={movie._id} movie={movie} handleLike={handleLike} isLiked={true} />
            }
          })
          }
        </div>
      }
      {(movies.length === 0) && (localStorage.getItem('searchQuery')) && !isLoading && <span className="movies-card-list__error">Ничего не найдено</span>}
      <div className={location.pathname === "/movies" ? "movies-card-list__devider" : "movies-card-list__devider movies-card-list__devider_alternative"}>
        {(location.pathname === "/movies" && movies.length > maxLimit && movies.length > limit && !searchError && !isLoading) && <button className="movies-card-list__more-button" onClick={handleAddRow}>Ещё</button>}
      </div>
    </section>
  )
}

export default MoviesCardList;
