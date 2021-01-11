export { Header } from './components/Header.js';
export { Main } from './components/Main.js';
export { Loader } from './components/Loader.js';
export { Router } from './components/Router.js';

export function App() {
  const $root = document.getElementById('root');

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
}
