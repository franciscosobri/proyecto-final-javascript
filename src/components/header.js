// -> importa Bootstrap preferiblemente en main.js (una sola vez)


export function Header() {
  return `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#/">Inicio <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/lista-pokemon">Lista de Pokémon</a>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Regiones
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Kanto</a></li>
            <li><a class="dropdown-item" href="#">Johto</a></li>
            <li><a class="dropdown-item" href="#">Hoenn</a></li>
            <li><a class="dropdown-item" href="#">Sinnoh</a></li>
            <li><a class="dropdown-item" href="#">Teselia</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
  `;
}
