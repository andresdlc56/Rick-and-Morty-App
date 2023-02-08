import { getPersonajes } from "../../helpers/getPersonajes"
import { setPersonajes } from "./personajesSlice";

export const startLoadingPersonajes = () => {
    return async(dispatch) => {
        //Solicitando personajes a la API. (helper)
        const personajes = await getPersonajes();
        console.log(personajes);

        //Cambiando el state en el store
        dispatch( setPersonajes(personajes) );
    }
}