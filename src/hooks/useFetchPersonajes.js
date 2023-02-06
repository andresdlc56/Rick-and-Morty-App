import { useEffect } from 'react';
import { getPersonajes } from '../helpers/getPersonajes';

export const useFetchPersonajes = () => {
    useEffect(() => {
        console.log('Hola Mundo');
    }, []);
}
