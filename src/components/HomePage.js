import React from 'react'
import { Carousel } from "react-bootstrap";
import '../App.css'

const HomePage = () => {
    return (
        <div>
            <Carousel >
  <Carousel.Item className="car-style">
    <img
      className="block w-50"
      src="https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg"
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item className="car-style">
    <img
      className="block w-50"
      src="https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_765/public/assets/images/blue_story.jpg?itok=CdNcOkot"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item className="car-style">
    <img
      className="block w-50"
      src="https://m.media-amazon.com/images/M/MV5BNzQxNzQxNjk5NV5BMl5BanBnXkFtZTgwNTI4MTU0MzE@._V1_.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default HomePage
