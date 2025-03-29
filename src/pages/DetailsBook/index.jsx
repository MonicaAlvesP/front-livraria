import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "@/services/api";
import s from "./detailsBook.module.scss";

export const DetailsBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const data = await getBookById(id);
        if (!data) {
          throw new Error("Livro não encontrado.");
        }
        setBook(data);
      } catch (err) {
        setError("Não foi possível carregar os detalhes do livro.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <main className={s.mainContent}>
      <section className={s.bookDetails}>
        <h1>{book.titulo}</h1>
        <img
          className={s.bookCover}
          src={book.image_url}
          alt={`Capa do livro ${book.titulo}`}
        />
      </section>

      <section className={s.bookInfo}>
        <h2>Detalhes do Livro</h2>
        <p><strong>Autor:</strong> {book.autor}</p>
        <p><strong>Ano de Lançamento:</strong> {book.ano_lancamento}</p>
        <p><strong>Sinopse:</strong> {book.sinopse}</p>
      </section>
    </main>
  );
};