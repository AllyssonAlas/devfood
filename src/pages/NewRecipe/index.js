import React, {useContext, useEffect, useState} from 'react'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'

import api from '../../services/api'

import {Form} from './styles'

export default function MyRecipes() {
  const [form, setFormField] = useState({
    name: '',
    category: '',
    description: '',
  })
  const [categories, setCategories] = useState([])
  const userProvider = useContext(store)
  const {dispatch} = userProvider

  function handleSetFormField(e) {
    setFormField({...form, [e.id]: e.value})
  }

  async function handleAddRecipe() {
    try {
      const category = categories.find(c => c.name === form.category)

      const data = {
        title: form.name,
        description: form.description,
        category: category.id,
        user: userProvider.state.user.id,
      }

      const addedRecipe = await api.post('/recipe/', data)

      console.log(addedRecipe)
      console.log('Recipe added')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    dispatch({type: 'REFRESH'})

    async function getCategories() {
      const categoriesRequest = await api.get('/category')

      setCategories(categoriesRequest.data)
    }
    getCategories()
  }, [])

  return (
    <PageContainer>
      <h1>Adicionar Receita</h1>
      <Form>
        <input
          id={'name'}
          placeholder={'Nome da receita'}
          value={form.name}
          onChange={e => handleSetFormField(e.target)}
        />
        <select id={'category'} value={form.description} onChange={e => handleSetFormField(e.target)}>
          <option>{form.category || 'Selecione uma categoria'}</option>
          {categories.map(category => (
            <option key={category.id} value={category.name} label={category.name} />
          ))}
        </select>

        <p>Descrição</p>

        <textarea id={'description'} onChange={e => handleSetFormField(e.target)} value={form.description}></textarea>

        <button type={'button'} onClick={handleAddRecipe}>
          Criar nova receita
        </button>
      </Form>
    </PageContainer>
  )
}
