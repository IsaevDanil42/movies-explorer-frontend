import { Link, useLocation } from "react-router-dom";
import "./Form.css";
import { useState } from "react";

function Form({ title, buttonText, subtitleText, linkText, link, handleSubmit, children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let location = useLocation();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return
    }
    setEmail('');
    setPassword('');
    handleSubmit(email, password);
  }

  return (
    <form className="form">
      <Link className="form__logo" to="/" />
      <h2 className="form__title">{title}</h2>
      {children}
      <div className="form__input-container">
        <p className="form__input-title">E-mail</p>
        <input className="form__input" placeholder="Введите E-mail" type="email" value={email} onChange={handleChangeEmail} required />
      </div>
      <div className="form__input-container">
        <p className="form__input-title">Пароль</p>
        <input className="form__input" placeholder="Введите пароль" type="password" value={password} onChange={handleChangePassword} minLength="2" maxLength="40" required />
      </div>
      <button className={location.pathname === "/signup" ? "form__submit-button" : "form__submit-button form__submit-button_login"} onClick={handleFormSubmit}>{buttonText}</button>
      <div className="form__subtitle-container">
        <p className="form__subtitle">{subtitleText}</p>
        <Link className="form__subtitle-link" to={link}>{linkText}</Link>
      </div>
    </form>
  )
}

export default Form;
