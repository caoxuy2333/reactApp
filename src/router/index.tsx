import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Index as Index1 } from '../split/index';
import { View } from '../ts/1-baseType';
import Jsx from '../ts/13-jsx';
import Form from '../antd-form/index'

const App = function () {
  React.useEffect(() => { 
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={() => <div>111</div>}></Route>
        <Route path="/about" render={() => <Index1 />}></Route>
        <Route path="/view" render={() => <View />}></Route>
        <Route path="/jsx" render={() => <Jsx />}></Route>
        <Route path="/form" render={() => <Form />}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;