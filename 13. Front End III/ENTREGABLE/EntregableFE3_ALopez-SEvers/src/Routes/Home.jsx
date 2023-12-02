import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([])
  const [{ theme }] = useContext(ContextGlobal)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res =>{
        setDentists(res.data)
    })
  },[])


  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards*/}
        {dentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home