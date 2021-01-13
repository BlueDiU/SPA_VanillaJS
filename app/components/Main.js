export function Main() {
  const $main = document.createElement('main');
  $main.id = 'main';

  // cuando este en una seccion que en el hash no incluya search
  if (!location.hash.includes('#/search')) $main.classList.add('grid-fluid');

  return $main;
}
