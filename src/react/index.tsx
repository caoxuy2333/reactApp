import * as React from "react"; 
import ReactCreateContext from './react-createContext/index';
import ReactLazy from './react-lazy/index';
import ReactMemo from './react-memo/index';
 
const App = () => {
  return (
    <div>
      <ReactCreateContext   /> 
      <ReactLazy />
      <ReactMemo />
    </div>
  )
}

export default App;
