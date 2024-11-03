import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  //Hook de react para mantener el estado:
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* AddCategory maneja toda logica de value y emitirlo*/}
      {/* Crea un input y emite el valor */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gifs */}
      {/* Componente que se encarge unicamente de mostrar una categoria(general) */}
      {categories.map((category) => (
        /* Se crea nuevamente este componente */
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
