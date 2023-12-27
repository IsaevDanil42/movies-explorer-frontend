import { Link, useLocation } from "react-router-dom";
import "./Form.css";

function Form({ title, buttonText, subtitleText, linkText, link, children }) {
  let location = useLocation();


  return (
    <form className="form">
      <Link className="form__logo" to="/"/>
      <h2 className="form__title">{title}</h2>
      {children}
      <div className="form__input-container">
        <p className="form__input-title">E-mail</p>
        <input className="form__input" placeholder="Введите E-mail" type="email" required/>
      </div>
      <div className="form__input-container">
        <p className="form__input-title">Пароль</p>
        <input className="form__input" placeholder="Введите пароль" type="password" minLength="2" maxLength="40" required/>
      </div>
      <button className={location.pathname === "/signup"? "form__submit-button" : "form__submit-button form__submit-button_login"}>{buttonText}</button>
      <div className="form__subtitle-container">
        <p className="form__subtitle">{subtitleText}</p>
        <Link className="form__subtitle-link" to={link}>{linkText}</Link>
      </div>
    </form>
  )
}

export default Form;
