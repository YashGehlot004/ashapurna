import React from 'react'
import Slider from 'react-slick';

export  function HomeApiconrol({sliderData}) {
   

    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
      <Slider {...settings}>

        {
              (sliderData.length>=1)

            
              ?

              sliderData[0].sliderMAinPath.map((v)=>{
                return(  
                    
                     
              <div>
                 <img src={sliderData[0].sliderImgpath+v.image} className="d-block w-100" alt="..."/>
              </div>

                )
              })
              

              :
                ''
        }

                       
                        
     </Slider>
    </div>
  )
}
