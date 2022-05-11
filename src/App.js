import { useState } from 'react';
import axios, { Axios } from 'axios';
import './App.css';
import Jumbotron from './components/Jumbotron';


function App() {

  const [pokemon, setPokemon] = useState([]);

  function getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`).then(response => {
      setPokemon(response.data.results);
    })
  };



  return (
    <div className="App">
      <button onClick={getPokemon}>Get Pokemon</button>
      <ul>
        {pokemon.map((pokemon, i) => (
          <li key={i}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
