import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
 
  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character/`);
  const [prev, setPrev] = useState(``);
  const [next, setNext] = useState(``);

function pagAnterior() { 
    setUrl(prev)
  }

    function pagSiguiente() { 
    setUrl(next)
  }


  useEffect(() => {
    setIsloading(true);
    fetch(url)
      .then(function (results) {
        return results.json();
      })
      .then(function (data) {
        console.log(data)
          setPrev(data.info.prev);
         setData(data.results);
          setNext(data.info.next);
        setIsloading(false);
      });
  },[url]);

 const mostrarPersonajes = data.map((personaje) => {
    return (
      <div>
        <h4 key={personaje.name}>{personaje.name}</h4>;
        <img src={personaje.image} alt =""/>;
      </div>
    )
  })


  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <button onClick={pagAnterior}>Página anterior</button>
        <button onClick={pagSiguiente}>Página siguiente</button>
       {mostrarPersonajes}
      </div>

    )
  }
}

export default App;

