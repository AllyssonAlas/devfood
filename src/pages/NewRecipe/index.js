import React, {useContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import SubmitButton from '../../components/SubmitButton'

import api from '../../services/api'

import {Form} from './styles'

export default function MyRecipes() {
  const [form, setFormField] = useState({
    name: '',
    category: '',
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const userProvider = useContext(store)
  const {dispatch} = userProvider

  function handleSetFormField(e) {
    setFormField({...form, [e.id]: e.value})
  }

  async function handleAddRecipe(e) {
    e.preventDefault()

    const {name, description, category} = form

    if (!name || !description || !category) {
      return toast.error('Preencha todos os campos')
    }

    setLoading(true)

    try {
      const category = categories.find(c => c.name === form.category)

      const data = {
        title: name,
        description: description,
        category: category.id,
        user: userProvider.state.user.id,
      }

      const addedRecipe = await api.post('/recipe/', data)

      if (addedRecipe) {
        setFormField({
          name: '',
          category: '',
          description: '',
        })

        toast.success('Receita adiciona com sucesso')
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
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
      <Form onSubmit={handleAddRecipe}>
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

        <h2>Descrição</h2>

        <textarea id={'description'} onChange={e => handleSetFormField(e.target)} value={form.description}></textarea>

        <SubmitButton loading={loading} title={'Criar nova receita'} />
      </Form>
    </PageContainer>
  )
}
