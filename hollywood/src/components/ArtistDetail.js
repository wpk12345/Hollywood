import React from "react";

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artistURL: "" };
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.artists);
  }


  render() {
    return <div className="ui container">Detail</div>;
  }
}
export default ArtistDetail;
