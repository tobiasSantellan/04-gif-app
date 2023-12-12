/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagen = async () => {
    const nuevaImagen = await getGifs(category);
    setImages(nuevaImagen);
    setIsLoading(false);
  };
  useEffect(() => {
    getImagen();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
