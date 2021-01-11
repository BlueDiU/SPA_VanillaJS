import api from '../helpers/wp-api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById('main');

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = '';
        console.log(posts);
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes('#/search')) {
    $main.innerHTML = 'Buscador';
  } else if (hash === '#/contacto') {
    $main.innerHTML = 'contacto';
  } else {
    $main.innerHTML = 'post seleccionado';
  }

  d.querySelector('.loader').style.display = 'none';
}
