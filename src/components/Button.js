import React from 'react'
import { useHistory } from 'react-router-dom'

const Burron = () => {
  let history = useHistory()
  const goToBurron = () => {
    console.log('me voy al burrón')
    history.push('/about')
  }
  return (
    <button type="button" onClick={goToBurron}>
      Soy un botón para About
    </button>
  )
}

export default Burron