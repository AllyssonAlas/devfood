import React, {useContext, useEffect} from 'react'

import {store} from '../../components/UserProvider'

export default function Home() {
  const user = useContext(store)

  useEffect(() => {
    // console.log(user)
  })
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
