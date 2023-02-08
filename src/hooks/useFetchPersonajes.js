import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startLoadingPersonajes } from '../store/personajes';

export const useFetchPersonajes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //Disparando Thunk para cargar personajes
        dispatch(startLoadingPersonajes());
    }, []);
}
