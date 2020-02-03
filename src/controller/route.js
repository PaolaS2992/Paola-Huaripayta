import components from '../view/components.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  // Limpiar container.
  container.innerHTML = '';
  switch (route) {
    case '#':
    case '#/':
    case '':
    { return container.appendChild(components.home()); }
    case '#/work':
    { return container.appendChild(components.work()); }
    case '#/about-me':
    { return container.appendChild(components.about()); }
    case '#/contact':
    { return container.appendChild(components.contact()); }
    default:
      break;
  }
  console.log(route);
};
export default changeView;
