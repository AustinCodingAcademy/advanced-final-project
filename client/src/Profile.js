import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/profile").then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

export default Profile;
