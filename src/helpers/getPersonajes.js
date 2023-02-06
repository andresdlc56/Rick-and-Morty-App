
export const getPersonajes = async() => {
    
    const url = 'https://rickandmortyapi.com/api/character';
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);
}
