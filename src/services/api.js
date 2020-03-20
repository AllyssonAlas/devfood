import axios from 'axios'

const api = axios.create({
  baseURL: 'https://receitas.devari.com.br',
})

export default api
