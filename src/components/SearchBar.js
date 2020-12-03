import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  // define onFormSubmit as arrow function solves undefined (this.) issue
  //
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.callback(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input
              type="text"
              name="term"
              id="term"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
