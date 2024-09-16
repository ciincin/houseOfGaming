import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MostPopular.css";


import { useEffect, useState } from "react";
import useFetchFreeRelevance from "../../Fetch-freeToGame/useFetchFreeRelevance";

function MostPopular() {
  const [relevantGames, setRelevantGames] = useState([]);
  const { data, error, isLoading } = useFetchFreeRelevance();

  useEffect(() => {
    if (data) {
      const fourRelevantGames = data.slice(1,5)
      setRelevantGames(fourRelevantGames)
    }
  }, [data]);

  return (
    <div className="most-div-wrapper">
      <h1 className="most-title">Most popular Free-to-Play Games</h1>

      <div className="most-card-group-wrapper">
        <CardGroup className="most-card-group">
          {relevantGames &&
            relevantGames.map((game) => (
              <Card className="most-card" key={game.id}>
                <Card.Img
                  variant="top"
                  src={game.thumbnail}
                />
                <Card.Body>
                  <Card.Title className="most-card-title">{game.title}</Card.Title>
                  <Card.Text className="most-card-text">{game.short_description} </Card.Text>
                </Card.Body>
                <div className="most-div-flex">
                    <button
                      className="most-see-more-btn"
                      onClick={() => window.open(game.game_url)}
                    >
                      See more
                    </button>
                  </div>
                <Card.Footer>
                  <small className="most-text-muted">
                    Release date: {game.release_date}
                  </small>
                </Card.Footer>
              </Card>
            ))}
        </CardGroup>
      </div>

      {error && <p>Error:{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default MostPopular;
