import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import "./Login.css";
import { api } from "../../utils/MainApi";

function Login({ handleLogin }) {
  const navigate = useNavigate();

  function handleSubmit(email, password) {
    api.signIn(email, password)
      .then((data) =>{
        if(data.token) {
          handleLogin();
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className="login">
      <Form title="Рады видеть!" buttonText="Войти" subtitleText="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup" handleSubmit={handleSubmit}></Form>
    </main>
  )
}

export default Login;
