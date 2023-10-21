/* @refresh reload */
import { render } from 'solid-js/web';

import './normalize.scss';
import './index.scss';
import { App } from './app/app.component';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found.');
}

render(() => <App />, root!);