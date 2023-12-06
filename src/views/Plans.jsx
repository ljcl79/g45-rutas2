import React from 'react'
import { useParams } from 'react-router-dom'

const Plans = () => {
    //const id = 100;
    const { id } = useParams();
    
  return (
    <>
    <div>Esta es la vista de planos</div>
    <p>Me mandaron el id: {id} </p>
    </>
  )
}

export default Plans