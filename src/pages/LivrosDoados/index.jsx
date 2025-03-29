import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "@/services/api";
import { BookCard } from "@/components/BookCard";
import s from "./livrosDoados.module.scss";

export const LivrosDoados = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Erro ao consultar livros:", error);
      }
    };

    fetchBooks();
  }, []);

  const goToSynopsis = (id) => {
    navigate(`/detalhesLivro/${id}`);
  };

  return (
    <main className={s.mainContent}>
      <h1>Livros Doados</h1>
      <section className={s.list}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} onSynopsisClick={goToSynopsis} />
        ))}
      </section>
    </main>
  );
};