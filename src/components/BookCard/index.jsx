import PropTypes from "prop-types";
import s from "./bookCard.module.scss";
import Book from "@/assets/img/generic-book.png";

export const BookCard = ({ book, onSynopsisClick }) => {
  return (
    <section className={s.bookCard}>
      <img
        className={s.bookCover}
        src={book.image_url}
        alt={`Capa do livro ${book.titulo}`}
      />
      <div className={s.bookInfo}>
        <h4>{book.titulo}</h4>
        <h5>Por {book.autor}</h5>
        <span>lançado em {book.ano_lancamento}</span>
        <button
          onClick={() => onSynopsisClick(book.id)}
          className={s.synopsisButton}
        >
          Ver Detalhes
        </button>
      </div>
    </section>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    capa: PropTypes.string,
    titulo: PropTypes.string,
    autor: PropTypes.string,
    ano_lancamento: PropTypes.string,
  }).isRequired,
  onSynopsisClick: PropTypes.func.isRequired,
};