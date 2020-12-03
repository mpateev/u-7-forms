
import React from "react";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {

  onSearchSubmit(term) {
    console.log('App says:', term)
  }
  render() {
      return (
        <div className="ui container" style={{ marginTop: "2rem" }}>
          <SearchBar callback={this.onSearchSubmit}/>
        </div>
      );
  }
}

