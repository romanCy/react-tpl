import React, { Component, Fragment } from 'react';
import store from '../../store';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      ...store.getState(),
    };
    store.subscribe(this.changStore);
  }

  changStore = () => {
    this.setState({
      ...store.getState(),
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.inputValue}
        {this.state.list.map((item, index) => {
          return <div key={index}>{item.userId}</div>;
        })}
      </Fragment>
    );
  }
}

export default UserList;
