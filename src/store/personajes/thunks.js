import { getPersonajes, cargarPaginaSiguiente, cargarPrevPage } from "../../helpers";
import { setPersonajes } from "./personajesSlice";

export const startLoadingPersonajes = () => {
    return async(dispatch) => {
        //Solicitando personajes a la API. (helper)
        const personajes = await getPersonajes();
        //console.log(personajes);

        //Cambiando el state en el store
        dispatch( setPersonajes(personajes) );
    }
}

export const nextPage = () => {
    return async(dispatch, getState) => {
        const { info } = getState().personajes;
        
        const data = await cargarPaginaSiguiente(info);
        //console.log(data);

        dispatch( setPersonajes(data) );
    }
}

export const prevPage = () => {
    return async(dispatch, getState) => {
        const { info } = getState().personajes;
        
        const data = await cargarPrevPage(info);
        //console.log(data);

        dispatch( setPersonajes(data) );
    }
}