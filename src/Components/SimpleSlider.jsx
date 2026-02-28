import root from 'react-shadow'
import Slider from "react-slick" 

import slickCss from "slick-carousel/slick/slick.css?inline"
import slickThemeCss from "slick-carousel/slick/slick-theme.css?inline"
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css?inline'

import Carrossel1 from '../assets/carrossel1.jpeg'
import Carrossel2 from '../assets/carrossel2.jpeg'
import Carrossel3 from '../assets/carrossel3.jpeg'
import Carrossel4 from '../assets/carrossel4.jpeg'

function SimpleSlider() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  
  {/*O root.div serve para isolar o boostrap do site, pois o site inteiro está sem boostrap e quando coloca ele, o site
    quebra inteiro. Então ele somente será usado para o simpleSlider*/}
  return (
  <root.div>
      <style>{bootstrapCss}</style>
      <style>{slickCss}</style>
      <style>{slickThemeCss}</style>

      <div className={`container`}>
          <Slider {...settings}>
            <div className="card px-1 border-white">
                  <img src={Carrossel1} alt='imagem carrossel 1' className="w-100" />
              </div>
              <div className="card px-1 border-white">
                  <img src={Carrossel2} alt='imagem carrossel 2' className="w-100"/>
              </div>
              <div className="card px-1 border-white">
                  <img src={Carrossel3} alt='imagem carrossel 3' className="w-100"/>
              </div>
              <div className="card px-1 border-white">
                  <img src={Carrossel4} alt='imagem carrossel 4' className="w-100"/>
              </div>
          </Slider>
      </div>
    </root.div>
  );
}

export default SimpleSlider;