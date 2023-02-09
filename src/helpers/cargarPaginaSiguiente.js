export const cargarPaginaSiguiente = async({ next }) => {
    
    const url = next;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}