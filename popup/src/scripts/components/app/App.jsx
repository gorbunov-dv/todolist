import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wraper">
          <h1>Todo</h1>
          <input type="text"/>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
