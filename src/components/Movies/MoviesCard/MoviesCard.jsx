import "./MoviesCard.css";
import testPic from "../../../images/pic__COLOR_pic.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  let isSaved = false;
  let location = useLocation();

  return (
    <div className="movieCard">
      <img className="movieCard__poster" src={testPic} alt="Обложка фильма" />
      <h3 className="movieCard__title">33 слова о дизайне</h3>
      {location.pathname === "/movies" ?
        <button className={isSaved ? "movieCard__saveButton movieCard__saveButton_active" : "movieCard__saveButton"}></button> :
        <button className="movieCard__deleteButton"></button>}
      <p className="movieCard__duration">1ч42м</p>
    </div>
  )
}

export default MoviesCard;
