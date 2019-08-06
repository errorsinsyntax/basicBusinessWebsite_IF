import React from 'react';
import { Carousel, Media } from 'react-bootstrap';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import FFF from '../images/FFF.png';


const MainCarousel = () => (
    <div>
      <Media>
        <Media.Body>
            <Carousel
              controls={false}
              indicators={false}
              interval={2000}
            >
              <Carousel.Item>
                <img
                className="Gallery"
                  alt="FFF"
                  src={FFF}
                  style={styles.image}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="Gallery"
                  alt="c1"
                  src={c1}
                  // style={styles.image}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Gallery"
                  alt="c2"
                  src={c2}
                  // style={styles.image}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Gallery"
                  alt="c3"
                  src={c3}
                  style={styles.image}
                />
              </Carousel.Item>
            </Carousel>
        </Media.Body>
      </Media>
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
      height: '50vh',
      minHeight: 'calc(100vh-136px)',
      width: '75%',
      // marginTop: '75px',
    }
  }