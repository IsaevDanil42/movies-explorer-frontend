import { useState } from "react";
import Form from "../Form/Form";
import "./Register.css";
import { api } from "../../utils/MainApi";
import { useNavigate } from "react-router-dom";

function Register({ handleLogin }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(email, password) {
    api.signUp(email, password, name)
      .then(() => {
        setName('');
        api.signIn(email, password)
          .then((data) => {
            if (data.token) {
              handleLogin();
              navigate('/movies', { replace: true });
            }
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className="register">
      <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" subtitleText="Уже зарегистрированы?" linkText="Войти" link="/signin" handleSubmit={handleSubmit}>
        <div className="form__input-container">
          <p className="form__input-title">Имя</p>
          <input className="form__input" placeholder="Введите имя" type="text" value={name} onChange={handleChangeName} minLength="2" maxLength="40" required />
        </div>
      </Form>
    </main>
  )
}

export default Register;
