import BookCover from '../../assets/img/book-cover.png';
import { ListBook } from '../../components/ListBook';
import { mainContent, listCategory, list } from './livrosDoados.module.scss';

export const LivrosDoados = () => {

  return (
    <main className={mainContent}>
      <h1>Livros Doados</h1>
      <section className={listCategory}>
        <h5>Ficção</h5>
        <div className={list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
        </div>
      </section>

      <section className={listCategory}>
        <h5>Romance</h5>
        <div className={list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
        </div>
      </section>

      <section className={listCategory}>
        <h5>Autoajuda</h5>
        <div className={list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
        </div>
      </section>

      <section className={listCategory}>
        <h5>Infantil</h5>
        <div className={list}>
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
          <ListBook
            image={BookCover}
            name="O protagonista"
            autor="Susanne Andrade"
          />
        </div>
      </section>
    </main>
  )
}
