import React from 'react'
import Card from "../Components/Card";
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([])
  const [{ theme }] = useContext(ContextGlobal)

  useEffect(() => {
    // Obtener los dentistas destacados del localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [])


  return (
    <main className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
        <p className="card-grid__empty-message">Usted no tiene dentistas favoritos</p>
      </div>
    </main>
  );
};

export default Favs;
