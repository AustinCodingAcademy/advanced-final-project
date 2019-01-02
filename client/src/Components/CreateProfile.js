import React, {Component} from 'react';
import UserForm from './UserForm.js';
import UserHeadingForm from './UserHeadingForm.js'

class CreateProfile extends Component {
    render() {
      return (
        <div className='createProfile'>
          <UserForm/>
          <UserHeadingForm/>
        </div>
      );
    }
  }

  export default CreateProfile;