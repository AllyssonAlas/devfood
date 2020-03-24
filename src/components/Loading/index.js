import React from 'react'
import Lottie from 'react-lottie'

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/temp/lf20_nXwOJj.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <h1>O que vamos cozinhar hoje?</h1>
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </>
  )
}
