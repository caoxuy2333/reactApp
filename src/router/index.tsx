import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Index as Index1 } from '../split/index';
import { View } from '../ts/1-baseType';
import Jsx from '../ts/13-jsx';
import Form from '../antd-form/index'
import Login from '../login/index';
import Link from '../link-router/index';
import FileTransferProtocol from '../file-transfer-protocol/index';

const App = function () {
  React.useEffect(() => { 
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={() => <Link />}></Route>
        
        <Route path="/fileTransferProtocol" render={() => <FileTransferProtocol />}></Route>
        <Route path="/about" render={() => <Index1 />}></Route>
        <Route path="/view" render={() => <View />}></Route>
        <Route path="/jsx" render={() => <Jsx />}></Route>
        <Route path="/form" render={() => <Form />}></Route>
        
        <Route path="/logi" render={() => <Login />}></Route> 
        <Route path="/login" render={() => <Login />}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;