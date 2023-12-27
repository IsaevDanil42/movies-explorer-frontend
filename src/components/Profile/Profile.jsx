import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [disabled, setDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleEditClick() {
    setDisabled(!disabled);
    setEditing(!editing);
  }

  function handleChangeName(e) {
    setName(e.target.value);
    setError(false);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(!disabled);
    setEditing(!editing);
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profle__title">Привет, {name}!</h2>
        <div className="profile__input-container">
          <p className="profile__input-title">Имя</p>
          <input className="profile__input" placeholder="Введите имя" value={name} onChange={handleChangeName} disabled={disabled} type="text" minLength="2" maxLength="40" required />
        </div>
        <div className="profile__input-container">
          <p className="profile__input-title">E-mail</p>
          <input className="profile__input" placeholder="Введите E-mail" value={email} onChange={handleChangeEmail} disabled={disabled} type="email" required />
        </div>
        {editing &&
          <>
            {error ? <>
              <span className="profile__submit-error">При обновлении профиля произошла ошибка.</span>
              <button className="profile__submit-button profile__submit-button_disabled" disabled>Сохранить</button>
            </> :
              <button className="profile__submit-button">Сохранить</button>
            }
          </>}
      </form>
      {!editing &&
        <>
          <button className="profile__edit-button" onClick={handleEditClick}>Редактировать</button>
          <button className="profile__exit-button">Выйти из аккаунта</button>
        </>
      }
    </main>
  )
}

export default Profile;
