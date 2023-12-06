import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card';

const Home = () => {
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(true);
  const [personajes, setPersonajes] = useState([]);
  const navigate = useNavigate();
  const url = 'https://rickandmortyapi.com/api/character';

  const handleClick = () => {
    navigate(`/plans/${id}`);
  }

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    
    setPersonajes(data.results);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [])
  
  if (loading)
    return (
      <h2>Cargando...</h2>
    );
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
      {
        personajes.map((p) => {
          return <Card personaje={p}></Card>
        })
      }
    </div>
  )
}

export default Home