import PropTypes from "prop-types";
import { getGifs } from "../helpers/GetGifs";
import { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImagen = async () => {
    const nuevaImagen = await getGifs(category);
    setImages(nuevaImagen);
  };
  useEffect(() => {
    getImagen();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

// Es recomendable tener la función de petición (en este caso, getGifs) por fuera del componente funcional por varias razones:

// Separación de Responsabilidades: Mantener la lógica de la solicitud y manipulación de datos separada del componente ayuda a mantener una estructura de código más limpia y modular. Cada función o componente debe tener una responsabilidad clara y única.

// Reutilización de Código: Si tienes la lógica de la solicitud dentro del componente, no puedes reutilizar fácilmente esa lógica en otros lugares de tu aplicación. Al tener la función por fuera, puedes importarla y usarla en diferentes componentes o módulos según sea necesario.

// Testabilidad: Es más fácil realizar pruebas unitarias cuando la lógica de la solicitud está separada del componente. Puedes probar la función de solicitud por sí misma sin tener que depender del estado interno del componente.

// Evitar Rendiciones Innecesarias: Si la lógica de la solicitud está dentro del componente y se llama en cada renderizado, podrías realizar solicitudes innecesarias, especialmente si la lógica no depende de las propiedades o el estado del componente. Al tener la función fuera del componente, puedes llamarla cuando sea necesario, no en cada renderizado.
