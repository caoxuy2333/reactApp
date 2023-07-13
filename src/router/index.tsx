import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Index as Index1 } from '../split/index';
import { View } from '../ts/1-baseType';
import Jsx from '../ts/13-jsx';
import Form from '../antd-form/index'
// import Login from '../login/index';
import Link from '../link-router/index';
import FileTransferProtocol from '../file-transfer-protocol/index';
import WebSocketTest from '../web-socket/index';

interface propType {
}
interface StateType {
  Component: (() => JSX.Element)
}


// 异步加载路由页面, 实现路由按需加载, 加载界面更快
export const asyncComponent = (loadComponent: Function) => (
  class AsyncComponent extends React.Component<propType, StateType> {
    constructor(props: propType) {
      super(props);
      this.state = {
        Component: null,
      };
      this.hasLoadedComponent = this.hasLoadedComponent.bind(this);
    }
    // react 16.3+ 使用新版生命周期函数
    UNSAFE_componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }
      loadComponent()
        .then((module: any) => module.default ? module.default : module)
        .then((Component: any) => {
          this.setState({
            Component
          });
        })
        .catch((error: Error) => {
          console.error('cannot load Component in <AsyncComponent>');
          throw error;
        })
    }
    hasLoadedComponent() {
      return this.state.Component !== null;
    }
    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);

const Login = asyncComponent(() => import('../login/index'));
const ReactTest = asyncComponent(() => import('../react/index'));
const GameTest = asyncComponent(() => import('../games/index'));
const FcGame = asyncComponent(() => import('../fc-game/index'));
const GbaGame = asyncComponent(() => import('../gba-game/index'));
const Reward = asyncComponent(() => import('../reward/index'));

const App = function () {
  return (
    <BrowserRouter>
      <Route path="/" exact component={() => <Link />}></Route>
      <Route path="/fileTransferProtocol" render={() => <FileTransferProtocol />}></Route>
      <Route path="/about" render={() => <Index1 />}></Route>
      <Route path="/view" render={() => <View />}></Route>
      <Route path="/jsx" render={() => <Jsx />}></Route>
      <Route path="/form" component={Form}></Route>
      <Route path="/logi" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path='/WebSocketTest' render={() => <WebSocketTest />}></Route>
      <Route path='/react' component={ReactTest}></Route>
      <Route path='/game' component={GameTest}></Route>
      <Route path='/fc' component={FcGame}></Route>
      <Route path='/gba' component={GbaGame}></Route>
      <Route path='/reward' component={Reward}></Route> 
    </BrowserRouter>
  )
}

export default App;