import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const handleNombreChange = (e) => {
    const nuevoNombre = e.target.value;
    setNombre(nuevoNombre);
    setNombreValido(nuevoNombre.trim().length >= 5);
  };

  const handleEmailChange = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);
    setEmailValido(
      nuevoEmail === "" ||
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(nuevoEmail)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombreValido) {
      if (emailValido) alert(`Gracias ${nombre} te contactaremos cuando antes vía mail`);
      else alert('Ingresar email valido');
    } else alert('El nombre debe tener minimo 5 letras');

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <br />
      <br />
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          label="Email"
          placeholder="Ingresa el email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
