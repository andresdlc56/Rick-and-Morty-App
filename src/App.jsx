import { useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { useFetchPersonajes } from "./hooks"

function App() {

    //Cargando personajes (Custom Hook)
    useFetchPersonajes();

    return (
      <Navbar title={ 'Rick and Morty App' } />
    )
}

export default App