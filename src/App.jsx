import { useSelector } from "react-redux";
import { Navbar, Pagination, Personajes } from "./components";
import { useFetchPersonajes } from "./hooks";

function App() {

  //Obteniendo el state "personajes" desde el store
  const { results } = useSelector(state => state.personajes);

  //Cargando personajes (Custom Hook)
  useFetchPersonajes();

  return (
    <>
      <Navbar title={"Rick and Morty App"} />

      <div className="container mt-5">
        <Pagination />
          <Personajes listPersonajes={ results } /> 
        <Pagination />
      </div>
    </>
  );
}

export default App;
