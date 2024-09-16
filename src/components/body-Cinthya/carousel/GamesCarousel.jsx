import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import "./GamesCarousel.css";

function GamesCarousel() {
  const [index, setIndex] = useState(0);
  const [newGames, setNewGames] = useState([]);
  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  const { data, error, isLoading } = useFetchFree();

  useEffect(() => {
    if (data) {
      const sortedGames= data.sort((a, b)=> new Date(b.release_date) - new Date(a.release_date))
      const threeNewestGames = sortedGames.slice(0,3)
      setNewGames(threeNewestGames)
    }

  }, [data]);


  return (
    <div className="game-div-wrapper">
      <h1 className="game-title">New releases</h1>
      <Carousel className="div-carousel-slide" activeIndex={index} onSelect={handleSelect}>
        {newGames &&
          newGames.map((game) => (
            <Carousel.Item className="carousel-item-custom"
              key={game.id}
              onClick={() => window.open(game.game_url)}
            >
              <div className="carousel-background" style={{ backgroundImage: `url(${game.thumbnail})` }} ></div>
              <CarouselImages className="carousel-caption" text={game.title} imageUrl={game.thumbnail} />
            </Carousel.Item>
          ))}
      </Carousel>

      {error && <p>Error:{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default GamesCarousel;
