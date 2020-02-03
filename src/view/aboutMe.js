export default () => {
  const viewAboutMe = `
  <h1>SOBRE MI</h1>
  <div>
      <div>Foto</div>
      <div>Mi resumen</div>
  </div>
  <div>
      <div>Habilidades tecnicas</div>
      <div>Habilidades Soft</div>
  </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewAboutMe;
  return divElement;
};
