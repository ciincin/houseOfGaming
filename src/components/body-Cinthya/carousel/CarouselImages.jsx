import "./GamesCarousel.css";

function CarouselImages({ text, imageUrl}) {

  return (
    <div className="carousel-img-wrapper">
      <img src={imageUrl} alt={text} />
    </div>
  );
}

export default CarouselImages;

