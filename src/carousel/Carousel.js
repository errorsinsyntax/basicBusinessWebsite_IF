import React from 'react';
import { Carousel, } from 'react-bootstrap';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import FFF from '../images/FFF (1).png';


const MainCarousel = () => (
    <div>
      <Carousel
        slide={true}
        indicators={false}
        interval={3000}
        controls={false}
        // style={styles.main}
      >
        <Carousel.Item>
          <img
            alt="100x100"
            src={c1}
            style={styles.image}
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            alt="100x100"
            src={c2}
            style={styles.image}
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            alt="10x10"
            src={c3}
            style={styles.image}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="10x10"
            src={c4}
            style={styles.image}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="10x10"
            src={FFF (1)}
            style={styles.image}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
  
  export default (MainCarousel);

  const styles = {
    center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    image: {
      height: '10vh',
      minHeight: 'calc(100vh-136px)',
      width: '50%',
      marginTop: '75px',
    }
  }