import * as React from "react";
const UserContext = React.createContext({
  username: 'johnny-appleseed', 
}); 


const App = () => {
  return (
    <UserContext.Consumer>
      {(context)=>{
        return <div>函数生成的数据: {context.username}</div>
      }}
    </UserContext.Consumer>
  )
}

export default App;
