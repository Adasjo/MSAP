import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div className="App">
      <h1>A React aspp</h1>
      <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
      +
      </button>
      {' '}
      <button onClick={onDecrement}>
      -
      </button></p>
      </div>
      );
    }
  }
  
  export default App;
  