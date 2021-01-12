export function PostCard(props) {
  let { date, title, slug, id, _embedded } = props;
  let dateFormat = new Date(date).toLocaleDateString(),
    urlPoster = _embedded['wp:featuredmedia']
      ? _embedded['wp:featuredmedia'][0].source_url
      : 'app/assets/favicon.svg';

  return `
    <article class="post-card">
      <img src="${urlPoster}" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
      </p>
    </article>
    `;
}
