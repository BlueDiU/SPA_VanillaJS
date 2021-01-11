export function SearchForm() {
  const $form = document.createElement('form'),
    $input = document.createElement('input');

  $form.classList.add('search-form');
  $form.name = 'search';
  $input.type = 'search';
  $input.placeholder = 'buscar...';

  $form.appendChild($input);
  return $form;
}
