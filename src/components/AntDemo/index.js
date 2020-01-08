import React, { Component, Fragment } from 'react';
import { Input } from 'antd';
import store from './../../store';

class AntDemo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange);
  }

  storeChange = () => {
    this.setState(store.getState());
  };

  inputChange = e => {
    const action = {
      type: 'changeInput',
      value: { inputValue: e.target.value },
    };
    store.dispatch(action);
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
