import React, { Component } from 'react';
import List from './components/List';
import AntDemo from './components/AntDemo';
import axios from 'axios';
import 'antd/dist/antd.css';
import UserList from './components/userList';
import store from './store';
import { saveStore, getId } from './store/actionCreators';

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
      ...store.getState()
    };
    store.subscribe(this.changeStore)
  }

  changeStore=()=>{
    this.setState({
      ...store.getState()
    })
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
      // self.setState({
      //   content: JSON.stringify(res),
      // });
      console.log(res.data.list);
      store.dispatch(saveStore({ list: res.data.list }));
    });
    axios.get('/getId').then(res => {
      // self.setState({
      //   content: JSON.stringify(res),
      // });
      console.log(res.data.id);
    });
  };

  getId = () => {
    store.dispatch(getId());
  };

  render() {
    return (
      <div>
        <AntDemo></AntDemo>
        <div>
          <button onClick={this.getData}>axios</button>
          <button onClick={this.pushItem}>增加</button>
          <button onClick={this.getId}>获取Id{this.state.userId ? `：${this.state.userId}`: ''}</button>
        </div>
        <List list={this.state.list}></List>
        {this.state.content}
        <UserList></UserList>
      </div>
    );
  }
}

export default App;
