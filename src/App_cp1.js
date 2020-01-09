import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './page/index'
import List from './page/List'
import Home from './page/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/list/123'>列表</Link></li>
        </ul>
        <Route path='/' exact component={Index}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/list/:id' component={List}></Route>
      </Router>
    );
  }
}

export default App;
