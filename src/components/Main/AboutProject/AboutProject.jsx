import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__heading">О проекте</h2>
      <div className="about-project__diplom-info">
        <div className="about-project__description">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__timeline-backend">
          <p className="about-project__timeline-backend-title">1 неделя</p>
          <p className="about-project__timeline-backend-text">Back-end</p>
        </div>
        <div className="about-project__timeline-frontend">
          <p className="about-project__timeline-frontend-title">4 недели</p>
          <p className="about-project__timeline-frontend-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
