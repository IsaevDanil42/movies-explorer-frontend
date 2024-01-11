import { useState } from "react";
import "./MoviesCard.css";
import { Link, useLocation } from "react-router-dom";

function MoviesCard({ movie, handleLike, isLiked }) {
  const [isSaved, setSaved] = useState(isLiked)
  let location = useLocation();

  function handleLikeMovie() {
    handleLike(movie, isSaved);
    setSaved(!isSaved);
  }

  return (
    <div className="movieCard">
      <Link to={movie.trailerLink} className="movieCard__trailer-link" target="_blank">
        <img className="movieCard__poster" src={location.pathname === "/movies" ? "https://api.nomoreparties.co/" + movie.image.url : movie.image} alt={"Обложка фильма " + movie.nameRU} />
      </Link>
      <h3 className="movieCard__title">{movie.nameRU}</h3>
      {location.pathname === "/movies" ?
        <button className={isSaved ? "movieCard__saveButton movieCard__saveButton_active" : "movieCard__saveButton"} onClick={handleLikeMovie}></button> :
        <button className="movieCard__deleteButton" onClick={handleLikeMovie}></button>}
      <p className="movieCard__duration">{Math.trunc(movie.duration / 60)}ч{movie.duration % 60}м</p>
    </div>
  )
}

export default MoviesCard;
