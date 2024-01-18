import { Link, useLocation } from "react-router-dom";
import "./Form.css";
import { useInput } from "../../utils/useInput";
import { emailRegExp, nameRegExp } from "../../utils/regExp";

function Form({ title, buttonText, subtitleText, linkText, link, handleSubmit }) {
  const email = useInput('', { isEmpty: true, regExp: emailRegExp });
  const password = useInput('', { isEmpty: true, minLength: 2, maxLength: 40 });
  const name = useInput('', { isEmpty: true, regExp: nameRegExp, minLength: 2, maxLength: 40 })
  let location = useLocation();

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(email.value, password.value, name.value);
  }

  return (
    <form className="form">
      <Link className="form__logo" to="/" />
      <h2 className="form__title">{title}</h2>
      {location.pathname === "/signup" &&
        <div className="form__input-container">
          <p className="form__input-title">Имя</p>
          <input className={"form__input" + " " + (name.error ? "form__input_error" : "")} placeholder="Введите имя" type="text" value={name.value} onChange={name.onChange} onFocus={name.onFocus} minLength="2" maxLength="40" required />
          {(name.isDirty && name.error) && <span className="form__input-error">{name.errMessage}</span>}
        </div>
      }
      <div className="form__input-container">
        <p className="form__input-title">E-mail</p>
        <input className={"form__input" + " " + (email.error ? "form__input_error" : "")} placeholder="Введите E-mail" type="email" value={email.value} onChange={email.onChange} onFocus={email.onFocus} required />
        {(email.isDirty && email.error) && <span className="form__input-error">{email.errMessage}</span>}
      </div>
      <div className="form__input-container">
        <p className="form__input-title">Пароль</p>
        <input className={"form__input" + " " + (password.error ? "form__input_error" : "")} placeholder="Введите пароль" type="password" value={password.value} onChange={password.onChange} onFocus={password.onFocus} minLength="2" maxLength="40" required />
        {(password.isDirty && password.error) && <span className="form__input-error">{password.errMessage}</span>}
      </div>
      {location.pathname === "/signup" ?
        <button className={("form__submit-button") + " " + (email.error || password.error || name.error ? "form__submit-button_disabled" : "")} disabled={email.error || password.error || name.error} onClick={handleFormSubmit}>{buttonText}</button> :
        <button className={("form__submit-button form__submit-button_login") + " " + (email.error || password.error ? "form__submit-button_disabled" : "")} disabled={email.error || password.error} onClick={handleFormSubmit}>{buttonText}</button>
      }
      <div className="form__subtitle-container">
        <p className="form__subtitle">{subtitleText}</p>
        <Link className="form__subtitle-link" to={link}>{linkText}</Link>
      </div>
    </form>
  )
}

export default Form;
