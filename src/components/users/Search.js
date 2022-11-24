import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      alert("Required");
      return;
    }
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            name="text"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter to search"
            value={this.state.text}
          ></input>
          <input
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-dark btn-block"
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
