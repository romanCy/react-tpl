import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    console.log(this.props.match)
  }

  render() { 
    return ( <div>
      List
    </div> );
  }
}
 
export default List;