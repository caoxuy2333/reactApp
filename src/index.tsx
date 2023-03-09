import * as React from 'react';
import * as ReactDom from 'react-dom';
import './fetch/mock/index';
import './fetch/index';
import * as url from './ts/11-module'
import App from './router/index';

console.log('url--------', url);

const Index = function () {
  return <React.StrictMode> 
    <App /> 
  </React.StrictMode>;
};

ReactDom.render(<Index />, document.getElementById('root') as HTMLElement);