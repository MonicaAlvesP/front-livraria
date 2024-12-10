import BookCover from '../../assets/img/book-cover.png';
import { ListBook } from '../../components/ListBook';
import s from '../../styles/layouts/livrosDoados.module.scss';

export const LivrosDoados = () => {

  return (
    <main className={s.mainContent}>
      <h1>Livros Doados</h1>
      <section className={s.listCategory}>
        <h5>Ficção</h5>
        <div className={s.list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
        </div>
      </section>

      <section className={s.listCategory}>
        <h5>Romance</h5>
        <div className={s.list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
        </div>
      </section>

      <section className={s.listCategory}>
        <h5>Autoajuda</h5>
        <div className={s.list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
        </div>
      </section>

      <section className={s.listCategory}>
        <h5>Infantil</h5>
        <div className={s.list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
            alt="Capa do livro O protagonista"
          />
        </div>
      </section>
    </main>
  )
}
