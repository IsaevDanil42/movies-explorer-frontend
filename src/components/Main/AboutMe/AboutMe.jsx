import "./AboutMe.css";
import photo from "../../../images/my-photo.png";

function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__title">Даниил</h3>
          <p className="about-me__subtitle">Пока еще не фронтенд-разработчик, 25 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-me__github" href="https://github.com/IsaevDanil42">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt="Моё фото"></img>
      </div>
    </section>
  );
};

export default AboutMe;
