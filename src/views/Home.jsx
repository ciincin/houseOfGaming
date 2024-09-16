import Banner from "../components/home-body/banner/Banner"
import GameSearch from "../components/home-body/gameSearch/GameSearch";
import BannerSurvey from "../components/home-body/bannerSurvey/BannerSurvey"
import GamesCarousel from "../components/body-Cinthya/carousel/GamesCarousel";
import MostPopular from "../components/body-Cinthya/mostPopular/MostPopular";


function Home() {

  return (
    <div>
        <Banner />
        <MostPopular/>
        <GamesCarousel/>
        <BannerSurvey />
        <GameSearch/>
    </div>
  )
}



export default Home
