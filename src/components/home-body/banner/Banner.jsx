import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'
import bannerLarge from '../../../assets/banners/banner1900.png'
import bannerSmall from '../../../assets/banners/banner1080.png'


const Banner = () => {
  return (
    <div>
    <picture className='banner'>
      <source media="(max-width: 800px)" srcSet={bannerSmall} />
      {/* <source media="(max-width: 1200px)" srcSet={bannerMedium} /> */}
      <source media="(min-width: 1081px)" srcSet={bannerLarge} />
      <img src={bannerLarge} alt="Banner" className="banner-image" />
    </picture>
    </div>

  );
};

export default Banner
