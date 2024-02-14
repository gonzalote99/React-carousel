import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel';


export default function Carousel1() {
  return(
    <Carousel infiniteLoop={true} autoPlay={true} interval={2000}>
      <div>
      <img src='https://raw.githubusercontent.com/zeeshan4002911/Testing/main/carousel_App/public/pic1.jpg' alt='scene1' />
        <p className='legend'>scene 1</p> 
      </div>
      <div>
      <img src='https://raw.githubusercontent.com/zeeshan4002911/Testing/main/carousel_App/public/pic2.jpg' alt='scene2' />
        <p className='legend'>scene 2</p> 
      </div>
      <div>
      <img src='https://raw.githubusercontent.com/zeeshan4002911/Testing/main/carousel_App/public/pic3.jpg' alt='scene3' />
        <p className='legend'>scene 3</p> 
      </div>

    </Carousel>
  )
}