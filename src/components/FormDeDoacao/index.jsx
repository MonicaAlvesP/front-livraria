import { useState } from 'react'
import { sendBook } from '@/services/api'
import s from './formDeDoacao.module.scss'

export const FormularioDeDoacao = () => {

  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [autor, setAutor] = useState('')
  const [image_url, setImage_url] = useState('')
  const [anoLancamento, setAnoLancamento] = useState('')
  const [sinopse, setSinopse] = useState('')

  const urlRegex = /^https:\/\//;

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!urlRegex.test(image_url)) {
      alert('Por favor, insira um link de imagem válido.')
      return
    }

    const bookData = {
      titulo,
      ano_lancamento: parseInt(anoLancamento),
      categoria,
      autor,
      imagem_url: image_url,
      sinopse,
    };

    try {
      console.log('Enviando dados para API:', bookData)
      await sendBook(bookData)
      alert('Livro doado com sucesso!')
      setTitulo('')
      setAnoLancamento('')
      setCategoria('')
      setAutor('')
      setImage_url('')
      setSinopse('')
    } catch (error) {
      alert(`Erro ao doar o livro: ${error.response?.data?.error || error.message}`)
    }
  };

  const isFormValid = titulo && categoria && autor && image_url && anoLancamento && sinopse;

  return (
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

        <button type="submit" disabled={!isFormValid} className={s.buttonSubmit}>
          Doar
        </button>
      </form>
    </div>
  )
}
