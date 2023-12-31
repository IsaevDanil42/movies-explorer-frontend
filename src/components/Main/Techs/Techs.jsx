import "./Techs.css";

function Techs() {
  return(
    <section className="techs" id="techs">
      <h2 className="techs__heading">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__container">
        <li className="techs__used-tech">HTML</li>
        <li className="techs__used-tech">CSS</li>
        <li className="techs__used-tech">JS</li>
        <li className="techs__used-tech">React</li>
        <li className="techs__used-tech">Git</li>
        <li className="techs__used-tech">Express.js</li>
        <li className="techs__used-tech">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
