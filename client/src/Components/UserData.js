import React, { Component } from 'react';

class UserData extends Component {
    render() {
      return (
        <div className='userDataContainer'>
          <h1 className='userTitle'>{this.props.title}</h1>
          <div className='userBody'>{this.props.body}</div>       
        </div>
      );
    }
  }

  export default UserData;