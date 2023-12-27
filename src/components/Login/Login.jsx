import Form from "../Form/Form";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <Form title="Рады видеть!" buttonText="Войти" subtitleText="Ещё не зарегистрированы?" linkText="Регистрация" link="/signup"></Form>
    </main>
  )
}

export default Login;
