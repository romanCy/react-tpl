import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Home from './../Home'
import List from './../List'
import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="wrap">
          <div className="left">
            <ul>
              <li><Link to='/home'>home</Link></li>
              <li><Link to='/list'>list</Link></li>
            </ul>
          </div>
          <div className="right">
            <Route path='/home' component={Home}></Route>
            <Route path='/List' component={List}></Route>
            <Redirect to='/home'></Redirect>
          </div>
        </div>
      </Router>
    );
  }
}

export default Index;
