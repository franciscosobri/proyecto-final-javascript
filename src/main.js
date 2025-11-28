import './style.css'
import { Header } from './components/header.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from './router.js';
import { Footer } from './components/footer.js';

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main id="main-content">
    <div id="view"></div>
  </main>
  ${Footer()}
`

const container = document.getElementById('app');
router();
window.addEventListener('hashchange', router);
