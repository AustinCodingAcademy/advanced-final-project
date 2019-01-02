import React, {Component} from 'react';
import Review from './Review.js';
import UserData from './UserData.js';
import UserHeading from './UserHeading.js';
import ReviewForm from './ReviewForm.js';

class HomePage extends Component {
    render() {
      return (
        <div className='homepage'>
          <UserData/>
          <UserHeading/>
          <ReviewForm/>
          <Review/>
        </div>
      );
    }
  }

  export default HomePage;