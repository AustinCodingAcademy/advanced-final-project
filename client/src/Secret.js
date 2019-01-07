import React, { Component } from "react";

// let token =localStorage.getItem("token");

//     fetch("/api/profile"),{
//       headers:{
//         "Authorization":token
//       } 
//     }


class Secret extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/secret").then((res) => {
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

export default Secret;