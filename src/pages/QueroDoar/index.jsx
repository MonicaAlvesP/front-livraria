import Livro from '../../assets/img/book.png'
import { mainContent, bookInfo, registrationSection, registrationForm, formInput } from './queroDoar.module.scss'

export const QueroDoar = () => {
  return (
    <main className={mainContent}>
      <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
      <section className={registrationSection}>
        <form className={registrationForm}>
          <div className={bookInfo}>
            <img src={Livro} alt="Imagem de um livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" name="titulo" id="titulo" placeholder='Título' required className={formInput} />
          <input type="text" name="categoria" id="categoria" placeholder='Categoria' required className={formInput} />
          <input type="text" name="autor" id="autor" placeholder='Autor' required className={formInput} />
          <input type="text" name="linkImagem" id="linkImagem" placeholder='Link da Imagem' required className={formInput} />
        </form>
        <button>Doar</button>
      </section>
    </main>
  )
}