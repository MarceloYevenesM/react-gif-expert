import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

//onAddCategory
const newCategory = "Categoria Prueba";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe mostrar el cargando inicialmente", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("Cargando..."));
  });

  test("debe mostrar el titulo", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("debe cambiar el input", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: newCategory } });
    expect(input.value).toBe(newCategory);
  });

  test("debe permitir agregar una nueva categoria", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form); //Se lo aplico al form
    expect(screen.getAllByText(newCategory).toBeTruthy);
  });
});
