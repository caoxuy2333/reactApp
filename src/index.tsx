import * as React from 'react';
import * as ReactDom from 'react-dom';
// import { Index as Index1 } from './split';
import { View } from './ts/1-baseType';
import './ts/2-interface';
import './ts/3-class';
import './ts/4-function';
import './ts/6-enum';
import './ts/7-compatible';
// import './ts/9-symbol';
import './ts/10-forofforin'
import { sv } from './ts/11-module';
import * as url from './ts/11-module'
import Jsx from './ts/13-jsx';
import './ts/14-decorators';
// import Form from './antd-form'
import { BrowserRouter,  Route } from 'react-router-dom'
import App from './router/index';


console.log('url--------', url);

const Index = function () {
  return <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
      {/* <Routes>
        <Route path="/about" element={<Index1 />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/jsx" element={<Jsx />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>;
};

ReactDom.render(<Index />, document.getElementById('root') as HTMLElement);