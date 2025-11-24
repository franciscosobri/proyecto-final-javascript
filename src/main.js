import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { Header } from './components/header.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

document.querySelector('#app').innerHTML = `
  ${Header()}
`

setupCounter(document.querySelector('#counter'))
