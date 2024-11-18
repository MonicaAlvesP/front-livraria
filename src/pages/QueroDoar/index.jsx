import Livro from '../../assets/img/book.png'

export const QueroDoar = () => {
  return (
    <>
      <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
      <section>
        <img src={Livro} alt="" />
        <h3>Informações do Livro</h3>
      </section>
      <section>
        <form>
          <input type="text" name="" id="" placeholder='Título' required />
          <input type="text" name="" id="" placeholder='Categoria' required />
          <input type="text" name="" id="" placeholder='Autor' required />
          <input type="text" name="" id="" placeholder='Link da Imagem' required />
        </form>
      </section>
    </>
  )
}
