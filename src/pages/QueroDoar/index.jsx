import {
  mainContent,
  registerSection,
  formRegister,
  formInput,
  congratulations,
} from './queroDoar.module.scss'

export const QueroDoar = () => {
  return (
    <main className={mainContent}>
      <section className={congratulations}>
        <h1>Doe livros, espalhe conhecimento!</h1>
        <p>Cada livro tem o poder de transformar vidas, oferecer novas perspectivas e abrir portas para um mundo de aprendizado. Quando você doa um livro, está proporcionando a outras pessoas a oportunidade de crescer e de enriquecer suas histórias. </p>
        <p>Seja parte dessa corrente de solidariedade! Doe seus livros usados, ajude a formar novos leitores e espalhe o amor pela leitura. Afinal, o conhecimento compartilhado é um presente que nunca se esgota. </p>
        <p><b>Lembrete:</b> Ao preencher o formulário ao lado, você poderá acompanhar o destino do livro doado na página <i>Livros Doados</i>. Ele poderá levar alegria e aprendizado para muitas mãos. Continue espalhando o poder da leitura! 🫶💡</p>
      </section>

      <section className={registerSection}>
        <h4>Por favor, preencha o formulário as informações do Livro</h4>
        <div className={formRegister}>
          <form>
            <input type="text" name="titulo" id="titulo" placeholder='Título' required className={formInput} />
            <input type="text" name="categoria" id="categoria" placeholder='Categoria' required className={formInput} />
            <input type="text" name="autor" id="autor" placeholder='Autor' required className={formInput} />
            <input type="url" name="linkImagem" id="linkImagem" placeholder='Link da Imagem' required className={formInput} />
            <select
              name="estadoConservacao"
              id="estadoConservacao"
              className={formInput}
              required
            >
              <option value="">Estado de Conservação</option>
              <option value="novo">Novo</option>
              <option value="bom">Bom</option>
              <option value="usado">Usado</option>
            </select>
            <button type="submit">Doar</button>
          </form>
        </div>
      </section>
    </main>
  )
}