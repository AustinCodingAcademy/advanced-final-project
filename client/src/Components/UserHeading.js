import React, { Component } from 'react';

class UserHeading extends Component {
    render() {
      return (
        <div className='userHeadingContainer'>
          <h1 className='userRating'>{this.props.rating}</h1>
          <img className="userPicture" alt="userPicture" src={this.props.image}>
          </img>
          <h1 className='userName'>{this.props.name}</h1>       
        </div>
      );
    }
  }

  export default UserHeading;