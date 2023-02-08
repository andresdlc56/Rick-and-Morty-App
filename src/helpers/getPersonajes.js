
//Funcion para obtener personajes desde la API

export const getPersonajes = async() => {
    
    const url = 'https://rickandmortyapi.com/api/character';
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
