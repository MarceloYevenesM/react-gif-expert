import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {

        //No se puede porque el hook solo se puede llamar dentro de un funcional component
        //useFetchGifs();
        //Los hooks necesitan parte del ciclo de vida del componente

        //Me permite realizar ese render
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        //Solo puedo evaluar lo inicial
        const { images, isLoading } = result.current;

        //Estado inicial
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });


    test('debe de retornar un arreglo de imagenes y isloading en false', async () => {


        const { result } = renderHook(() => useFetchGifs('One Punch'));

        //Esperar que pase algo
        await waitFor(
            //Espero que el resultado... sea mayor que 0
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 3000 //Debe dar un error en 3 segundos sino pasa nada
            }
        );

        const { images, isLoading } = result.current;
        //Estado inicial
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
})