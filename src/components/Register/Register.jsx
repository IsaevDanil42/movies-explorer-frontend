import Form from "../Form/Form";
import "./Register.css";
import { api } from "../../utils/MainApi";
import { useNavigate } from "react-router-dom";

function Register({ handleLogin }) {
  const navigate = useNavigate();

  function handleSubmit(email, password, name) {
    api.signUp(email, password, name)
      .then(() => {
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
      <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" subtitleText="Уже зарегистрированы?" linkText="Войти" link="/signin" handleSubmit={handleSubmit}></Form>
    </main>
  )
}

export default Register;
