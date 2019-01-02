import React, { Component } from 'react';

class Review extends Component {
    render() {
      return (
        <div className='reviewContainer'>
          <h1 className='reviewHeader'>{this.props.date}</h1>
          <div className='reviewBody'>{this.props.body}</div>       
        </div>
      );
    }
  }

  export default Review;