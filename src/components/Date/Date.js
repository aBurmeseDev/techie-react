import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.startTimer();
  }
  compoenentWillUnmount() {
    this.stopTimer();
  }
  startTimer() {
    this.timmer = setInterval(() => this.resetTimer(), 1000);
  }
  resetTimer() {
    this.setState({
      dateTime: new Date().toLocaleString(),
      status: true
    });
  }
  stopTimer(e) {
    clearInterval(this.timmer);
    this.setState({
      status: false
    });
  }
  render() {
    return (
      <h5 style={{ marginTop: "3rem", color: "#ffffff" }}>
        Date: {this.state.dateTime}
      </h5>
    );
  }
}
export default Clock;
