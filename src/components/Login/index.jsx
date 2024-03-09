import { useState } from "react";
import { loginEmailPassword } from '../../services/firebase';
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "universal-cookie";
import styles from './login.module.css';

const Login = ({ setIsLogin }) => {
  const cookies = new Cookies();
  const [inputErrors, setInputErros] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [infoLogin, setInfoLogin] = useState({
    email: '',
    password: ''
  });

  const handleInputs = (event) => {
    setInputErros({});
    const { name, value } = event.target;
    setInfoLogin({
      ...infoLogin,
      [name]: value
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const newErrors = {};

    if (infoLogin.email !== undefined && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(infoLogin.email)) {
      newErrors.email = 'Correo invalido';
    }

    if (infoLogin.password !== undefined && infoLogin.password.trim() === "") {
      newErrors.password = 'campo requerido';
    }

    if (Object.keys(newErrors).length > 0) {
      setInputErros(newErrors);
      setIsLoading(false);
    } else {
      const resLogin = await loginEmailPassword(infoLogin);
      if (resLogin) {
        cookies.set('TOKEN_LOGIN', resLogin, {
          path: "/",
          maxAge: 3600 * 1000 * 24 * 365
        });
        setIsLoading(false);
        setIsLogin(true);
      } else {
        setIsLoading(false);
        setInputErros({
          email: 'Correo electrónico no registrado',
          password: 'constraseña no registrada'
        });
      }
    }
  };

  return (
    <section className={styles.login_container}>
      <div className={styles.shadow}></div>
      <form
        className={styles.card}
        onSubmit={handleLogin}
      >
        <h2>Movies Web</h2>
        <div className={styles.inputs_container}>
          <div className={styles.input_group}>
            <label htmlFor="email">Correo electronico</label>
            <input
              onChange={handleInputs}
              type="email"
              name="email"
              id="email"
              value={infoLogin.email}
              className={inputErrors.email ? styles.input_error : ''}
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">Contraseña</label>
            <input
              onChange={handleInputs}
              type="password"
              name="password"
              id="password"
              value={infoLogin.password}
              className={inputErrors.password ? styles.input_error : ''}
            />
          </div>
        </div>
        {isLoading ?
          <ClipLoader
            color={'#FFF'}
            loading={isLoading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
          <button type="submit">Iniciar</button>
        }
      </form>
    </section>
  );
};

export { Login };
