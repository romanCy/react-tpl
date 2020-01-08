import React, { Component } from 'react';
import ListItem from '../ListItem/index.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  static defaultProps = {
    list: [
      {
        name: 'oooo',
      },
      {
        name: 'mjrmk',
      },
    ],
  };

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log('组件即将被挂载到页面');
  }

  componentDidMount() {
    console.log('已经挂载');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate---组件发生改变前执行');

    // 必须要有返回值 如果返回false 就不会进行后续的更新了
    return true;
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('组件更新前执行 但是在shouldComponentUpdate之后');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('组件更新完成');
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('props更新了就会执行');
  }

  componentWillUnmount() {
    console.log('组件在删除前执行a');
  }

  getName = name => {
    this.setState({
      activeName: name,
    });
  };

  edit(idx) {
    this.state.list[idx].name = 'wowowowo';
    this.setState({
      state: this.state,
    });
  }

  render() {
    console.log('props&&state变化触发');
    const { list } = this.state;
    return (
      <div>
        <div
          onClick={() => {
            console.log(this.state.list);
          }}
        >
          当前选中{this.state.activeName}
        </div>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <ListItem getName={this.getName} key={index} name={item.name}></ListItem>
              <div
                onClick={() => {
                  this.edit(index);
                }}
              >
                edit
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
