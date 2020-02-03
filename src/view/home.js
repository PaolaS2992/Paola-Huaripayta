export default () => {
  const viewHome = `
  <h1>PAOLA SONIA HUARIPAYTA GONZALES</h1>
    <figure>
        <img src="" alt="Imagen relacionado a mi carrera">
    </figure>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
