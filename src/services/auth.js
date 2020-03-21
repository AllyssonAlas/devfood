import axios from 'axios'

export async function authenticate(username, password) {
  const auth = await axios.post(
    'https://receitas.devari.com.br/authentication/',
    {username, password},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  localStorage.setItem('user', JSON.stringify(auth.data))

  return auth
}
