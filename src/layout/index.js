import React, { Component } from 'react';
import MHeader from './../components/Header'

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { content } = this.props
    
    return ( 
      <div>
        <MHeader></MHeader>
        <div>
          {content}
        </div>
      </div>
     );
  }
}
 
export default BaseLayout;