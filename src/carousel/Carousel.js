import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';



const MainCarousel = () => (
    <div>
      <Container>
            <Carousel 
              controls={false}
              indicators={false}
              interval={8000}
            >
              <Carousel.Item>
                <img
                  className="Gallery"
                  justifyContent="center" 
                  flexdirection="column"  
                  alt="c1"
                  src={c1}
                  style={styles.image}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Gallery"
                  justifyContent="center" 
                  flexdirection="column"
                  alt="c2"
                  src={c2}
                  style={styles.image}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Gallery"
                    justifyContent="center" 
                    flexdirection="column"
                    alt="c3"
                    src={c3}
                    style={styles.image}
                />
              </Carousel.Item>
            </Carousel>
          </Container>
    </div>
  );
  
  export default (MainCarousel);

  const styles = {
    image: {
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      marginTop: '75px',
    },
  }
  