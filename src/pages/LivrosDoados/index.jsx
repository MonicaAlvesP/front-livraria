import BookCover from '../../assets/img/book-cover.png';
import { ListBook } from '../../components/ListBook';
import { mainContent, list } from './livrosDoados.module.scss';

export const LivrosDoados = () => {
  return (
    <main className={mainContent}>
      <h1>Livros Doados</h1>
      <section className={list}>
        <ListBook
          image={BookCover}
          name="O protagonista"
          autor="Susanne Andrade"
          category="Ficção"
        />
      </section>
    </main>
  )
}
