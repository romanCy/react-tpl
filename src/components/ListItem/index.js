import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  send=(name)=>{
    const { getName } = this.props
    getName(name)
  }
  render() {
    const { name } = this.props;
    return (
      <div onClick={()=>{this.send(name+'12331')}}>
        <div>{name}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string
}

export default ListItem;
