import './style.css'
import { Header } from './components/header.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from './router.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <div id="view"></div>
`

const container = document.getElementById('app');
router();
window.addEventListener('hashchange', router);
