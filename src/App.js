import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component{
  // constructors는 js를 알면 됨.
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  };
  // js 코드
  add = () => {
    this.setState(current => ({count: current.count + 1}));
    };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount() {
    console.log("component rendered")
  }

  componentDidUpdate() {
    // setState를 호출하면, component를 호출하고 먼저 render를 호출한 다음 업데이트가 완료되었다고 말하면 componentDidUpdate가 실행된다. 
    console.log("I just update!");
  }

  componentWillUnmount() {
    // component가 떠날 때 호출된다. 하지만 브라우저 상에서는 알 길이 없네..ㅎ
    console.log("Goodbye");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
