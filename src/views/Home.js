export function Home() {
  return `
    <div class="container mt-4">
      <h2>Bienvenido a la Pokédex</h2>
      <br></br>
      <a href="#/lista-pokemon"><button class="btn-nacional">Pokédex Nacional</button></a>
      <a href="#/kanto"><button class="btn-kanto">Pokédex de Kanto</button></a>
      <a href="#/johto"><button class="btn-johto">Pokédex de Johto</button></a>
    </div>
  `;
}
