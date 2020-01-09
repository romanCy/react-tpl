import React, { Component } from 'react';
import BLayout from './../../layout'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    console.log(this.props.match)
  }

  render() { 
    const content = <h1>List</h1>
    return ( <div>
      <BLayout content={content}></BLayout>
    </div> );
  }
}
 
export default List;