export function SearchForm() {
  const d = document,
    $form = document.createElement('form'),
    $input = document.createElement('input');

  $form.classList.add('search-form');
  $input.name = 'search';
  $input.type = 'search';
  $input.autocomplete = 'off';
  $input.placeholder = 'buscar...';

  $form.appendChild($input);

  if (location.hash.includes('#/search'))
    $input.value = localStorage.getItem('wpSearch');

  d.addEventListener('search', (e) => {
    if (!e.target.matches('input[type="search"]')) return false;

    if (!e.target.value) localStorage.removeItem('wpSearch');
  });

  d.addEventListener('submit', (e) => {
    /* Entoces si el el formulario que no tenga la clase .search-form
      es el como foco entonces no hace nada y devuelve false
    */
    if (!e.target.matches('.search-form')) return false;

    e.preventDefault();

    console.log(e.target.search.value.toLowerCase().trim());
    localStorage.setItem(
      'wpSearch',
      e.target.search.value.toLowerCase().trim()
    );
    location.hash = `#/search?search=${e.target.search.value
      .toLowerCase()
      .trim()}`;
  });

  return $form;
}
