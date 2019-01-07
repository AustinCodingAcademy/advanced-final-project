import React, {Component} from "react";
import TutorForm from "./TutorForm.js";
import ReviewForm from "./ReviewForm.js";

class TutorProfile extends Component {
    render() {
      return (
        <div>
          <TutorForm/>
          <ReviewForm/>
        </div>
      );
    }
  }


export default TutorProfile;