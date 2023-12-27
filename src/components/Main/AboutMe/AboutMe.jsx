import "./AboutMe.css";
import photo from "../../../images/my-photo.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__title">Даниил</h3>
          <p className="about-me__subtitle">Пока еще не фронтенд-разработчик, 25 лет</p>
          <p className="about-me__text">Я родился и живу в Томске, Учился в ТУСУРе. Я люблю слушать музыку, кататься на велосипеде, а ещё увлекаюсь настольными играми. Надеюсь связать свою жизнь с программированием. </p>
          <Link className="about-me__github" to="https://github.com/IsaevDanil42" target="_blank" >Github</Link>
        </div>
        <img className="about-me__photo" src={photo} alt="Моё фото"></img>
      </div>
    </section>
  );
};

export default AboutMe;
