export const cargarPrevPage = async({ prev }) => {
    const url = prev;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}