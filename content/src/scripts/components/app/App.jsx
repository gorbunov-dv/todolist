import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener(() => {
      this.setState({
        count: this.state.count + 1
      });
    })
  }

  render() {
    return (
      <div>
        Hello React {this.state.count}
      </div>
    );
  }
}

export default App;
