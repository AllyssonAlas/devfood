import React, {useContext, useEffect, useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {toast} from 'react-toastify'
import PropTypes from 'prop-types'

import {store} from '../../components/UserProvider'
import Container from '../../components/Container'
import Button from '../../components/Button'

import api from '../../services/api'

import {Form} from './styles'

export default function RecipeForm({match}) {
  const [form, setFormField] = useState({
    title: '',
    categoryName: '',
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const {id} = match.params
  const history = useHistory()
  const location = useLocation()
  const {state} = useContext(store)

  function handleSetFormField(e) {
    setFormField({...form, [e.id]: e.value})
  }

  async function handleSubmitRecipe(e) {
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

      const submitedRecipe = id ? await api.put(`/recipe/${id}/`, data) : await api.post('/recipe/', data)

      if (submitedRecipe && id) {
        toast.success('Receita editada com sucesso')
        history.goBack()
        return
      }

      if (submitedRecipe) {
        toast.success('Receita adicionada com sucesso')

        return setFormField({
          title: '',
          categoryName: '',
          description: '',
        })
      }
    } catch (err) {
      toast.error('Não foi possível cadastrar receita')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function getCategories() {
      const categoriesRequest = await api.get('/category')

      setCategories(categoriesRequest.data)
    }
    getCategories()
  }, [])

  useEffect(() => {
    async function getRecipe(recipeId) {
      setLoading(true)

      const recipeRequest = await api.get(`recipe/${recipeId}`)

      const {title, category, description} = recipeRequest.data

      if (recipeRequest) {
        setFormField({
          title,
          categoryName: category.name,
          description,
        })
      }
      setLoading(false)
    }

    if (id) {
      getRecipe(id)
    }
  }, [])

  useEffect(() => {
    setFormField({
      title: '',
      categoryName: '',
      description: '',
    })
  }, [location])

  return (
    <Container>
      <h1>{id ? 'Editar Receita' : 'Adicionar Receita'}</h1>
      <Form onSubmit={handleSubmitRecipe}>
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
        <textarea
          id={'description'}
          onChange={e => handleSetFormField(e.target)}
          value={form.description}
          maxLength={6000}
        />
        <Button loading={loading} title={id ? 'Editar Receita' : 'Criar nova receita'} type={'submit'} />
      </Form>
    </Container>
  )
}

RecipeForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
}
