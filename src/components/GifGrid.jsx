//Priemra react

//Terceros

//Mis componentes
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

//Funciones o cosas que no son hooks

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          //...image esparcir propiedades del image
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
