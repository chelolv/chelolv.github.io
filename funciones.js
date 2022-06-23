const boton_tema = document.querySelector('.boton_tema');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

var tema = localStorage.getItem('tema');

if (!tema) {
  if (prefresDarkScheme.matches) {
    document.body.classList.add('tema_oscuro');
    tema = 'tema_oscuro';
  }
  else {
    document.body.classList.add('tema_claro');
    tema = 'tema_claro';
  }
  localStorage.setItem('tema', tema)
}
else {
  if (tema === 'tema_oscuro') {
    document.body.classList.add('tema_oscuro');
  }
  else if (tema === 'tema_claro') {
    document.body.classList.add('tema_claro');
  }
}


boton_tema.addEventListener('click', () => {

  document.body.classList.toggle('tema_oscuro');
  document.body.classList.toggle('tema_claro');

  if (tema === 'tema_oscuro') {
    tema = 'tema_claro';
  }
  else if (tema === 'tema_claro') {
    tema = 'tema_oscuro';
  }

  localStorage.setItem('tema', tema)
})