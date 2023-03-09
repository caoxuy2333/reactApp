import * as React from "react";
const { lazy, Suspense } = React;

// 异步加载react组件

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: (() => <Resource />) as never });
  }, 4000);
}));

const Resource = () => (
  <div className="box">
    <h1>React Lazy</h1>
    <p>This component loaded after 4 seconds, using React Lazy and Suspense</p>
  </div>
)

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Lazy />
    </Suspense>
  )
}

export default App;
