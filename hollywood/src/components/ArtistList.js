import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const ArtistList = props => {
  console.log(props.artists);

  function handleClick(e){
    e.preventDefault();
    console.log('click');
  }

  const artists = props.artists.map(artist => {
    return (
      <div key={artist.artistID}>
        <Card>
          <Card.Content>
            <Image floated="right" size="mini" src={artist.imageURL} />
            <Card.Header>
              {artist.firstName} {artist.lastName}
            </Card.Header>
            <Card.Meta>{artist.art.toUpperCase()}</Card.Meta>
          </Card.Content>

          <Card.Content extra>
            <Button onClick={handleClick} basic color="green">
              Details
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  });

  return <div>{artists}</div>;
};

export default ArtistList;
