import React, {useContext, useEffect, useState} from 'react'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import {store} from '../../components/UserProvider'
import PageContainer from '../../components/PageContainer'
import Button from '../../components/Button'

import api from '../../services/api'

import {Form} from './styles'

export default function MyRecipes() {
  const [form, setFormField] = useState({
    title: '',
    categoryName: '',
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const {dispatch, state} = useContext(store)

  function handleSetFormField(e) {
    setFormField({...form, [e.id]: e.value})
  }

  async function handleAddRecipe(e) {
    e.preventDefault()

    const {title, description, categoryName} = form

    if (!title || !description || !categoryName) {
      return toast.error('Preencha todos os campos')
    }

    setLoading(true)

    try {
      const category = await categories.find(c => c.title === form.category)

      const data = {
        title,
        description,
        category: category.id,
        user: state.user.id,
      }

      const addedRecipe = await api.post('/recipe/', data)

      if (addedRecipe) {
        toast.success('Receita adiciona com sucesso')

        return setFormField({
          title: '',
          categoryName: '',
          description: '',
        })
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
          id={'title'}
          placeholder={'Nome da receita'}
          value={form.title}
          onChange={e => handleSetFormField(e.target)}
        />
        <select id={'categoryName'} value={form.categoryName} onChange={e => handleSetFormField(e.target)}>
          <option>{form.categoryName || 'Selecione uma categoria'}</option>
          {categories.map(category => (
            <option key={category.id} value={category.name} label={category.name} />
          ))}
        </select>

        <h2>Descrição</h2>

        <textarea id={'description'} onChange={e => handleSetFormField(e.target)} value={form.description} />

        <Button loading={loading} title={'Criar nova receita'} type={'submit'} />
      </Form>
    </PageContainer>
  )
}
