import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../Slider/Slider.css';





const Slider = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (

      

      <div>
      <Carousel responsive={responsive}>
        
  <div className="card" ><img src='./assets/img_1.jpg' alt='img'/></div>
  <div className="card" ><img src='./assets/img_3.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_4.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_5.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_6.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_7.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_9.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_1.jpg' alt='img'/></div>
  <div className="card" ><img src='./assets/img_3.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_4.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_5.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_6.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_7.jpg' alt='img' /></div>
  <div className="card" ><img src='./assets/img_9.jpg' alt='img' /></div>

</Carousel>;
    </div>

    

      );
};
export default Slider;
