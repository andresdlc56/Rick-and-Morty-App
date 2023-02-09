//Componente para el manejo de cada personaje proveniente de la api
export const Personajes = ({ listPersonajes = [] }) => {

    //console.log(listPersonajes);

  return (
    <div className="row">
        {
            listPersonajes.map((personaje, index) => (
                <div className="col-3 mb-4" key={ index }>
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={ personaje.image } alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{ personaje.name }</h5>
                            <hr />
                            <p>Location: { personaje.location.name }</p>
                            <p>Species: { personaje.species }</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
};
