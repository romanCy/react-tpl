import React, { Component } from 'react';
import List from './components/List';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'App',
      list: [
        {
          name: 'weq',
        },
        {
          name: 'oooo',
        },
        {
          name: 'oooo',
        },
        {
          name: 'oooo',
        },
      ],
      content: '',
    };
  }

  pushItem = () => {
    this.state.list.push({
      name: 'le' + new Date().toLocaleDateString(),
    });
    this.setState({
      list: this.state.list,
    });
  };

  getData = () => {
    const self = this;
    axios.get('/getdata').then(res => {
      self.setState({
        content: JSON.stringify(res),
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.getData}>axios</button>
          <button onClick={this.pushItem}>增加</button>
        </div>
        <List list={this.state.list}></List>
        {this.state.content}
      </div>
    );
  }
}

export default App;
