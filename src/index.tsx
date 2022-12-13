import * as React from 'react';
import * as ReactDom from 'react-dom';
import './fetch/mock/index';
import './ts/2-interface';
import './ts/3-class';
import './ts/4-function';
import './ts/6-enum';
import './ts/7-compatible';
import './ts/10-forofforin'
import * as url from './ts/11-module'
import './ts/14-decorators';
import App from './router/index';


console.log('url--------', url);

const Index = function () {
  return <React.StrictMode> 
    <App /> 
  </React.StrictMode>;
};

ReactDom.render(<Index />, document.getElementById('root') as HTMLElement);