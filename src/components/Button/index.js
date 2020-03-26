import React from 'react'
import {FaSpinner} from 'react-icons/fa'
import PropTypes from 'prop-types'

import {Container} from './styles'

export default function Button({loading, title, ...rest}) {
  return (
    <Container {...rest} loading={loading}>
      {loading ? <FaSpinner /> : title}
    </Container>
  )
}

Button.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
  loading: false,
}
