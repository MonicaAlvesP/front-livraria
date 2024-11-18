import BookCover from '../../assets/img/book-cover.png';

export const LivrosDoados = () => {
  return (
    <>
      <h1>Livros Doados</h1>
      <section>
        <figure>
          <img src={BookCover} alt="" />
          <figcaption>O protagonista</figcaption>
          <p>Susanne Andrade</p>
          <span>Ficção</span>
        </figure>
      </section>
    </>
  )
}
