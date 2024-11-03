import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //No se debe poner nunca(ejecucion de una funcion) dentro de un funcional componente
    //Cada vez que se renderiza se ejecuta
    getGifs(category);

    //Efectos secundarios: Proceso que cuando algo suceda quiero disparar un efecto
    //Cuando el couter cambie quiero disparar un efecto por ejemplo

    useEffect(() => {
        //Primer argumento funcion flecha del codigo que queremos ejecutar
        getGifs(category).then((newImages) => {
            setImages(newImages);
            setIsLoading(false);
        });
        // console.log(images);
    }, []); //Dependencias(vacio se construye solo cuando se carga por primera vez el elemento)

    //Un hook no es mas que una funcion
    return {
        images,
        isLoading,
    }
}
