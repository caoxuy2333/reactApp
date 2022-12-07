import * as React from 'react'; 
import { BrowserRouter as Router,  Switch, Route, HashRouter,  } from 'react-router-dom'

const App = function () {
  return (
    <div>
      <Router> 
          <Route path="/" exact component={() => <div>111</div>}></Route> 
          <Route path="/about" render={() => <div>111</div>}></Route>
          <Route path="/view" render={() => <div>222</div>}></Route>
          <Route path="/jsx" render={() => <div>333</div>}></Route>
          <Route path="/form" render={() => <div>444</div>}></Route>
      </Router>
 
          {/* <Route path="/about" render={() => <div>111</div>}></Route>
          <Route path="/view" render={() => <div>222</div>}></Route>
          <Route path="/jsx" render={() => <div>333</div>}></Route>
          <Route path="/form" render={() => <div>444</div>}></Route> */}
    {/* <HashRouter>
      <Switch>
        <Router history={'base'}>
        </Router>
      </Switch>
    </HashRouter> */}
    </div>
  )
}

export default App;