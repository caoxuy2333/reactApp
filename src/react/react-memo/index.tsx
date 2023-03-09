import * as React from 'react';

interface pro {
  name: string
}

// React.memo  props状态未更新时 不渲染ChildOne组件
// 与PureComponent相似

const ChildOne = React.memo((props: pro) => {
  console.log("Rerendering Child One");
  return (
    <div className="box">
      <h2>Hello! {props.name}</h2>
      <p>This component won&apos;t re-render, check your console.</p>
    </div>
  )
});

ChildOne.displayName = 'map';

const ChildTwo = (props: pro) => {
  console.log('Rerendering Child Two')
  return (
    <div className="box">
      <h2>Hello! {props.name}</h2>
      <p>This component will render re-render, check your console.</p>
    </div>
  )
}

class App extends React.Component {
  state = {
    value: 1,
    name: "Chris"
  };

  handleClick = () => {
    this.setState({
      value: this.state.value + 1,

    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <div>{this.state.value}</div>
          <button onClick={this.handleClick}>+</button>
        </div>
        <ChildOne name={this.state.name} />
        <ChildTwo name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default App;