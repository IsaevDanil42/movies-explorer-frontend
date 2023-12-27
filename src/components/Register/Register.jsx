import Form from "../Form/Form";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" subtitleText="Уже зарегистрированы?" linkText="Войти" link="/signin">
        <div className="form__input-container">
          <p className="form__input-title">Имя</p>
          <input className="form__input" placeholder="Введите имя" type="text" minLength="2" maxLength="40" required />
        </div>
      </Form>
    </main>
  )
}

export default Register;
