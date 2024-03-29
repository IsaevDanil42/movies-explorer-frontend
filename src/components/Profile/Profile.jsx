import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import { api } from "../../utils/MainApi";
import { useInput } from "../../utils/useInput";
import { emailRegExp, nameRegExp } from "../../utils/regExp";

function Profile({ onSignOut, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const name = useInput('', { isEmpty: true, regExp: nameRegExp, minLength: 2, maxLength: 40, unicValue: true })
  const email = useInput('', { isEmpty: true, regExp: emailRegExp, unicValue: true });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    name.reloadInputValue(currentUser.name);
    email.reloadInputValue(currentUser.email);
  }, [currentUser])


  function handleEditClick() {
    name.saveCurrentValue(name.value);
    email.saveCurrentValue(email.value);
    setEditing(!editing);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    api.updateUserInfo(email.value, name.value)
      .then((userData) => {
        setCurrentUser(userData);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        setEditing(!editing);
      })
      .catch((err) => {
        if (err.message === "На сервере произошла ошибка") {
          setError(true);
          setErrorMessage('Пользователь с таким email уже существует.');
        } else {
          setError(true);
          setErrorMessage('При обновлении профиля произошла ошибка.');
        }
      })
  }

  return (
    <main className="profile">
      <div className="profile__form-container">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__input-container">
            <p className="profile__input-title">Имя</p>
            <input className={"profile__input" + " " + (name.error ? "profile__input_error" : "")} placeholder="Введите имя" value={name.value ? name.value : currentUser.name} onChange={name.onChange} onFocus={name.onFocus} disabled={!editing} type="text" minLength="2" maxLength="40" required />
            {(name.isDirty && name.error && editing) && <span className="profile__input-error">{name.errMessage}</span>}
          </div>
          <div className="profile__input-container">
            <p className="profile__input-title">E-mail</p>
            <input className={"profile__input" + " " + (email.error ? "profile__input_error" : "")} placeholder="Введите E-mail" value={email.value ? email.value : currentUser.email} onChange={email.onChange} onFocus={email.onFocus} disabled={!editing} type="email" required />
            {(email.isDirty && email.error && editing) && <span className="profile__input-error">{email.errMessage}</span>}
          </div>
          {editing &&
            <>
              {error && <span className="profile__submit-error">{errorMessage}</span>}
              <button className={"profile__submit-button" + " " + ((name.error || email.error) || (!name.isChange && !email.isChange) ? "profile__submit-button_disabled" : "")} disabled={(name.error || email.error) || (!name.isChange && !email.isChange)}>Сохранить</button>
            </>
          }
          {success && <span className="profile__submit-message">Данные обновлены</span>}
        </form>
        {!editing &&
          <>
            <button className="profile__edit-button" onClick={handleEditClick}>Редактировать</button>
            <button className="profile__exit-button" onClick={onSignOut}>Выйти из аккаунта</button>
          </>
        }
      </div>
    </main>
  )
}

export default Profile;
