import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getBooks, searchBooks } from "@/services/api";
import { BookCard } from "@/components/BookCard";
import { BookCardSkeleton } from "@/components/BookCardSkeleton";
import s from "./livrosDoados.module.scss";

export const LivrosDoados = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        if (query) {
          const data = await searchBooks(query);
          setBooks(data);
        } else {
          const data = await getBooks();
          setBooks(data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  const goToSynopsis = (id) => {
    navigate(`/detalhesLivro/${id}`);
  };

  return (
    <main className={s.mainContent}>
      <div className={s.header}>
        <h1>{query ? `Resultados para "${query}"` : 'Livros Doados'}</h1>
        {query && <p className={s.subtitle}>{books.length} livro(s) encontrado(s)</p>}
      </div>
      <section className={s.list}>
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))
        ) : books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onSynopsisClick={goToSynopsis} />
          ))
        ) : (
          <p className={s.noBooks}>Nenhum livro encontrado para exibir.</p>
        )}
      </section>
    </main>
  );
};

