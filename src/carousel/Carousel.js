import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import FFF from '../images/FFF.png';


const MainCarousel = () => (
    <div>
      <Container>
            <Carousel 
              // justifyContent="center" 
              // flexdirection="column"
              controls={false}
              indicators={false}
              interval={2000}
            >
              <Carousel.Item>
                <img
                className="Gallery"
                justifyContent="center" 
                flexdirection="column"
                  alt="FFF"
                  src={FFF}
                  style={styles.image}
                />
              </Carousel.Item>
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
    topLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignContent: 'space-evenly',
      marginLeft: '125px',
      marginRight: '125px',
    },
    bottomLine: {
      width: '25%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    center: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    image: {
      // height: '100vh',
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      marginTop: '75px',
    },
    title: {
      // height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      marginLeft: '-200px',
      marginRight: '-200px',
    },
    subtitle: {
      height: '250px',
    },
    caption: {
      height: '550px',
    },
  
  }
  