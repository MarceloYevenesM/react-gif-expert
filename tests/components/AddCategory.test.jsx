import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    //Objeto y valores del evento
    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";

    //jest function es una simulacion de la funcion
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //El evento y el valor que le pasare como parametro
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form); //Se lo aplico al form

    //Se pasa por referencia por lo que tiene el ultimo valor siempre
    expect(input.value).toBe("");

    //Preguntar si la funcion ha sido llamada
    expect(onNewCategory).toHaveBeenCalled();
    //Espero que solo se llame 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    //Llamada con el valor del input
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form); //Se lo aplico al form

    //Espero que solo se llame 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
