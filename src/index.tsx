import * as React from 'react';
import { createRoot } from 'react-dom/client';
// import './fetch/mock/index'; // 使用mock 获取.nes文件错误
import './fetch/index';
import App from './router/index';
import { Provider } from 'react-redux';
import { store } from './store';

const Index = function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = createRoot(document.getElementById('root'))
root.render(<Index />) 