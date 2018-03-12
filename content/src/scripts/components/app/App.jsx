import React, {Component} from 'react';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          Hello React {this.state.count}
        </div>
      </div>
    );
  }
}

export default App;
