export default () => {
  const viewHome = `
    <h1>PORTAFOLIO</h1>
      <div>
          <article>Proyecto 01</article>
          <article>Proyecto 02</article>
          <article>Proyecto 03</article>
      </div>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
}