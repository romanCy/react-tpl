import React, { Component, Fragment } from 'react';
import { Input } from 'antd';
import store from './../../store';
import {changeInputAction} from '../../store/actionCreators'

class AntDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState()
    };
    store.subscribe(this.storeChange);
  }

  

  storeChange = () => {
    this.setState(store.getState());
  };

  inputChange = e => {
    store.dispatch(changeInputAction({ inputValue: e.target.value }));
  };
  render() {
    return (
      <Fragment>
        <div>{this.state.inputValue}</div>
        <Input placeholder="pdyu" value={this.state.inputValue} onChange={this.inputChange} />
      </Fragment>
    );
  }
}

export default AntDemo;
