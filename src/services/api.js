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
  const response = await api.post('/doar', bookData);
  return response.data;
}

export const getBooks = async () => {
  const response = await api.get('/livros-doados');
  return response.data;
}

export const getBookById = async (id) => {
  const parsedId = parseInt(id);
  const response = await api.get(`/livros-doados/${parsedId}`);
  return response.data;
};