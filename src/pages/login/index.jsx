import s from '../../styles/layouts/login.module.scss';
import Bookstore from '../../assets/img/bookstore.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";

export const Login = () => {
  return (
    <section className={s.loginPage}>
      <img src={Bookstore} alt="foto ilustrativa de estante com livros" />

      <section className={s.loginSection}>
        <form className={s.formLogin}>
          <input type="email" required placeholder="Email" />
          <input type="password" required placeholder="Senha" />
          <button type="submit" className={s.buttonSubmit}>Entrar</button>
        </form>

        <div className={s.loginLinks}>
          <p>
            <a href="/esqueci-senha">Esqueci minha senha</a>
            <FaLongArrowAltRight size={10} />
          </p>
          <p>Não possui uma conta ainda?
            <a href="/cadastro">Cadastre-se</a>
            <FaLongArrowAltRight size={10} />
          </p>
        </div>
      </section>
    </section>
  )
}