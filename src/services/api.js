import axios from 'axios';

const API_URL = 'https://api-livraria-f6no.onrender.com'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export const sendBook = async (bookData) => {
  try {
    const response = await api.post('/doar', bookData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar o livro:', error)
    throw error
  }
}
export const getBooks = async () => {
  try {
    const response = await api.get('/livros-doados')
    return response.data
  } catch (error) {
    console.error('Erro ao consultar os livros:', error)
    throw error
  }
}

export const getBookById = async (id) => {
  try {
    const parsedId = parseInt(id);
    const response = await api.get(`/livros-doados/${parsedId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Erro ao buscar livro: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Erro ao buscar livro com ID ${id}:`, error);
    throw error;
  }
};