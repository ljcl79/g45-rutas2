import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({personaje}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/plans/${personaje.id}`);
    }

    
  return (
    <div style={{display:'flex', flexDirection:'column', width:'80%', padding:'0.5rem'}}>
        <img src={personaje.image} />
        <hr></hr>
        <div>
            <p>{personaje.name}</p>
            <button onClick={(e) => handleClick(e)}>Ver detalle</button>
        </div>

    </div>
  )
}

export default Card