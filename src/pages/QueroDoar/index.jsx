import s from './queroDoar.module.scss';
import { useState } from 'react';
import { sendBook } from '@/services/api';

export const QueroDoar = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [autor, setAutor] = useState('');
  const [image_url, setImage_url] = useState('');
  const [anoLancamento, setAnoLancamento] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookData = {
      titulo,
      ano_lancamento: parseInt(anoLancamento),
      categoria,
      autor,
      imagem_url: image_url,
      sinopse,
    };

    try {
      console.log('Enviando dados para API:', bookData);
      await sendBook(bookData);
      alert('Livro doado com sucesso!');
      setTitulo('');
      setAnoLancamento('');
      setCategoria('');
      setAutor('');
      setImage_url('');
      setSinopse('');
    } catch (error) {
      console.error('Error donating book:', error);
      alert(`Erro ao doar o livro: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={s.mainContent}>
      <section className={s.congratulations}>
        <h1>Doe livros, espalhe conhecimento!</h1>
        <p>
          Cada livro tem o poder de transformar vidas, oferecer novas
          perspectivas e abrir portas para um mundo de aprendizado. Quando você
          doa um livro, está proporcionando a outras pessoas a oportunidade de
          crescer e de enriquecer suas histórias.
        </p>
        <p>
          Seja parte dessa corrente de solidariedade! Doe seus livros usados,
          ajude a formar novos leitores e espalhe o amor pela leitura. Afinal,
          o conhecimento compartilhado é um presente que nunca se esgota.
        </p>
        <p>
          <b>Lembrete:</b> Ao preencher o formulário ao lado, você poderá
          acompanhar o destino do livro doado na página <i>Livros Doados</i>.
          Ele poderá levar alegria e aprendizado para muitas mãos. Continue
          espalhando o poder da leitura! 🫶💡
        </p>
      </section>

      <section className={s.registerSection}>
        <div className={s.formRegister}>
          <h4>Por favor, preencha o formulário as informações do Livro</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              required
              className={s.formInput}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <input
              type="number"
              placeholder="Ano de Lançamento"
              required
              className={s.formInput}
              value={anoLancamento}
              onChange={(e) => setAnoLancamento(e.target.value)}
            />

            <input
              type="text"
              placeholder="Categoria"
              required
              className={s.formInput}
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />

            <input
              type="text"
              placeholder="Autor"
              required
              className={s.formInput}
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />

            <input
              type="url"
              placeholder="Link da Imagem"
              required
              className={s.formInput}
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />

            <input
              type="text"
              placeholder="Sinopse"
              required
              className={s.formInput}
              value={sinopse}
              onChange={(e) => setSinopse(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Doar'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};