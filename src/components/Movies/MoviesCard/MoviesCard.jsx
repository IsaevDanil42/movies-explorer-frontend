import "./MoviesCard.css";
import testPic from "../../../images/pic__COLOR_pic.png";

function MoviesCard() {
  const isSaved = false;

  return (
    <div className="movieCard">
      <img className="movieCard__poster" src={testPic} alt="Обложка фильма" />
      <h3 className="movieCard__title">33 слова о дизайне</h3>
      <button className={isSaved ? "movieCard__saveButton movieCard__saveButton_active" : "movieCard__saveButton"}></button>
      <p className="movieCard__duration">1ч42м</p>
    </div>
  )
}

export default MoviesCard;
