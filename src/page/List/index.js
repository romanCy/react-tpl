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

  back=()=>{
    this.props.history.replace('/home')
  }

  render() { 
    const content = <div>List<button onClick={this.back}>back</button></div>
    return ( <div>
      <BLayout content={content}></BLayout>
    </div> );
  }
}
 
export default List;