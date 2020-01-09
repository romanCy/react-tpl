import React, { Component, Fragment } from 'react';
import BLayout from './../../layout';
import { Route,Link } from 'react-router-dom';
import Me from './../Me';
import About from './../About';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const content = (
      <Fragment>
        <div>三级路由</div>
        <ul>
          <li><Link to='/home/me'>me</Link></li>
          <li><Link to='/home/about'>about</Link></li>
        </ul>
        <Route path="/home/me" component={Me}></Route>
        <Route path="/home/about" component={About}></Route>
      </Fragment>
    );
    return (
      <div>
        <BLayout content={content}></BLayout>
      </div>
    );
  }
}

export default Home;
