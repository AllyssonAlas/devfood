import React from 'react'
import {FaSpinner} from 'react-icons/fa'

import {Button} from './styles'

export default function SubmitButton({loading, title}) {
  return <Button loading={loading}>{loading ? <FaSpinner /> : title}</Button>
}
