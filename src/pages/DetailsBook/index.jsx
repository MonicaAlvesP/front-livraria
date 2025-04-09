import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById } from "@/services/api";
import { IoIosArrowBack } from "react-icons/io";
import s from "./detailsBook.module.scss";

export const DetailsBook = () => {
  const navigate = useNavigate();
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
        setError("Desculpe, não conseguimos carregar os detalhes do livro no momento. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Carregando os detalhes do livro, por favor, aguarde...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Não conseguimos encontrar o livro solicitado. Por favor, verifique o ID e tente novamente.</p>;
  }

  const handleBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <main className={s.mainContent}>
      <section className={s.bookDetails}>
        <img
          className={s.bookCover}
          src={book.image_url}
          alt={`Capa do livro ${book.titulo}`}
        />
        <h1>{book.titulo}</h1>
      </section>

      <section className={s.bookInfo}>
        <button
          onClick={handleBackButtonClick}
          className={s.backButton}
        >
          <IoIosArrowBack />
          Voltar
        </button>
        <h2>Detalhes do Livro</h2>
        <p><strong>Autor:</strong> {book.autor}</p>
        <p><strong>Ano de Lançamento:</strong> {book.ano_lancamento}</p>
        <p><strong>Sinopse:</strong> {book.sinopse}</p>
      </section>
    </main>
  );
};