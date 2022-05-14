import React, { Component } from "react";
import axios from "axios";

export default class ClassBasedComponent extends Component {
  state = {
    count: 0,
    isLoding: true,
    data: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({
      data: res.data,
      isLoding: false,
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          count
        </button>
        <div>Class Based Component</div>
      </div>
    );
  }
}
