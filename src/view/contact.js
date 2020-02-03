export default () => {
  const viewContac = `
    <h1>CONTACTO</h1>
    <p>Te invito a contactarme a través de los siguientes medios:</p>
    <ul>
        <li>
            <span>icono Correo</span>
            <a href="">p.huaripayta@gmail.com</a>
        </li>
        <li>
            <span>icono Linkedin</span>
            <a href="">Paola Huaripayta Gonzales</a>
        </li>
        <li>
            <span>icono Github</span>
            <a href="">PaolaS2992</a>
        </li>
        <li>
            <span>icono Mundito</span>
            <a href="">Ver Curriculum</a>
        </li>
    </ul>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewContac;
  return divElement;
};
