import React, {Component} from 'react';
import Header from './components';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wraper">
          <Header />
          <input type="text"/>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
