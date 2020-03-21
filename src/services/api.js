import axios from 'axios'

const api = axios.create({
  baseURL: 'https://receitas.devari.com.br/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(async config => {
  const {token} = await JSON.parse(localStorage.getItem('user'))
  if (token) {
    config.headers.Authorization = `Token ${token}`
  }
  return config
})

export default api
