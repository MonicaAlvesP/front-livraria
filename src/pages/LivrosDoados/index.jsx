import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "@/services/api";
import { BookCard } from "@/components/BookCard";
import { BookCardSkeleton } from "@/components/BookCardSkeleton";
import s from "./livrosDoados.module.scss";

export const LivrosDoados = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getBooks();
        setBooks(data);
      } finally {
        setLoading(false);
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
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))
        ) : books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onSynopsisClick={goToSynopsis} />
          ))
        ) : (
          <p className={s.noBooks}>Parece que ainda não temos livros doados. Que tal ser o primeiro a doar?</p>
        )}
      </section>
    </main>
  );
};
