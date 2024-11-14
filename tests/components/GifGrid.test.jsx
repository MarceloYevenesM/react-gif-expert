const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components/GifGrid");
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//mock objeto falso que imita propiedades y la interfaz de uno real
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    //Debe tener un cargando por ahí
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https//aaaaa.png",
      },
      {
        id: "ABCD",
        title: "Saitama",
        url: "https//bbbbb.png",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    //Busco cualquier imagen y deben ser 2
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
