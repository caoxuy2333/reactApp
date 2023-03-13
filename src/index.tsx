import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './fetch/mock/index';
import './fetch/index';
import * as url from './ts/11-module'
import App from './router/index';

console.log('url--------', url);

const Index = function () {
  return <App />;
};

const root = createRoot(document.getElementById('root'))
root.render(<Index />) 