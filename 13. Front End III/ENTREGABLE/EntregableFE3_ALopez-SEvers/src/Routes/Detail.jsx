import React from 'react'
import axios from 'axios'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ({ match }) => {
  const [{ theme }] = useContext(ContextGlobal)
  const [dentistdetails, setDentistdetails] = useState({})
  const { params } = match
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/${params.id}")
    .then( res =>{
        setDentistdetails(res.data)
    })
  },[params.id])

  const { name, username, email, phone, website } = dentistdetails

  return (
      <main className={theme}>
        <h1>Detail Dentist id {params.id}</h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <Card dentist={dentistdetails} />
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </main>
  )
}


export default Detail