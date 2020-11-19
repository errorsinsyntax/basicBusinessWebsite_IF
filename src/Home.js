import React from 'react';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import homeImageUnsplash from './images/homeImageUnsplash.jpg';
import SitL from './images/SitL.png';


class Home extends React.Component {
    render() {
        return (
            <div >
                <Container style={styles.body}>
                    <div>
                        <br/>
                        <br/>
                    </div>
                            <Row className="justify-content-space-evenly">
                                <Col>
                                    <img
                                    className="Gallery"
                                    justifyContent="center" 
                                    flexdirection="column"
                                        alt="autumn calendar"
                                        src={homeImageUnsplash}
                                        style={styles.image}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Carousel/>
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <a 
                                        href="http://eepurl.com/gy7MFH" 
                                        method="POST"
                                    >
                                    <img
                                    className="Gallery"
                                    justifyContent="center" 
                                    flexdirection="column"
                                        alt="Email Sign Up"
                                        src={SitL}
                                        style={styles.image}
                                    />
                                    </a>
                                </Col>
                            </Row>
                 </Container>  
        </div>
        )
    }

}

export default Home;

const styles = {
    image: {
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '5px',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    },
      body: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      },
  }
  
   