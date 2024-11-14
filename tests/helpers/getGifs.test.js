import { getGifs } from "../../src/helpers/getGifs";


describe('pruebas en el getGifs()', () => {
    test('debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        //console.log(gifs);

        //Mayor a 0
        expect(gifs.length).toBeGreaterThan(0);
        //Un objeto con esa estructura y que me de igual lo que sea mientras sea un string
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})

