
import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  state = { images: [] }; // assign proper empty object or array

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });;
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar callback={this.onSearchSubmit} />
        <p>Found: {this.state.images.length}</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

