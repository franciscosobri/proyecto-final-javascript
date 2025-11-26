import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { Header } from './components/header.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getPokemons } from './services/pokemonService.js';
import { renderPokemonList } from './views/pokemon_list.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
`

const container = document.getElementById('app');
