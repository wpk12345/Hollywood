import React from "react";
import Axios from "axios";

import ArtistDetail from "./components/ArtistDetail";
import ArtistList from "./components/ArtistList";

class App extends React.Component {
  state = { artists: [], artistURL: "" };

  componentDidMount() {
    const url = "https://fb-assessment.glitch.me/artists";

    Axios.get(url, {})
      .then(response => {
        console.log(response);
        this.setState({
          artists: response.data
        });
      })
      .then()
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <ArtistList artists={this.state.artists} />
        <ArtistDetail />
      </div>
    );
  }
}

export default App;
