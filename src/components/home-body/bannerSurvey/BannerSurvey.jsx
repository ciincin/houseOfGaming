import { useNavigate } from "react-router-dom";
import "./BannerSurvey.css"


function Encuesta(){
  const navigate = useNavigate()

  function goToSurvey(){
    navigate('/survey')
  }
  return (
    <div className="banner-survey-wrapper">
      <h2 className="banner-survey-text">Are you tired of playing the same videogames?</h2>
      <p className="banner-survey-text-2">Use our game finder to discover your new favourite game!</p>
      <button onClick={goToSurvey} className="most-see-more-btn">Let's go!</button>
    </div>
  );
}

export default Encuesta;
