import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const [{ theme }, dispatch] = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: { theme: theme === 'dark' ? '' : 'dark' } });
  };

  return (
    <nav className={`navBar ${theme}`}>
      {/* Aquí deberán agregarse los enlaces correspondientes a las rutas definidas */}
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>
        {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </nav>
  );
};

export default Navbar;