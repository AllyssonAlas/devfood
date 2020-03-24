import React from 'react'
import {FaSpinner} from 'react-icons/fa'

import {Container} from './styles'

export default function Button({loading, title, ...rest}) {
  return (
    <Container {...rest} loading={loading}>
      {loading ? <FaSpinner /> : title}
    </Container>
  )
}
