import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // este condicional fue creado para para que no se repitan los valores ingresados en el input

    setCategories([newCategory, ...categories]);
    // Este enfoque asegura trabajar con inmutabilidad en React, lo cual es importante para garantizar un comportamiento predecible del estado y del ciclo de vida.
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Listado de Gifs  */}
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>

      {/*Gif Item */}
    </>
  );
};
