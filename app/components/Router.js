import api from '../helpers/wp-api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';
import { Post } from './Post.js';

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
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes('#/search')) {
    //$main.innerHTML = '<p>Buscador</p>';
    let query = localStorage.getItem('wpSearch');

    if (!query) return false;

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        //$main.innerHTML = Post(post);
      },
    });
  } else if (hash === '#/contacto') {
    $main.innerHTML = 'contacto';
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem('wpPostId')}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  d.querySelector('.loader').style.display = 'none';
}
