import React from 'react';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import HomeMain from './images/HomeMain.jpg';
import fallCalendar from './images/fallCalendar.jpg';
import fallHours from './images/fallHours.jpg';
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
                                <a 
                                href="https://www.facebook.com/events/2415172928723906/">
                                    
                                    <img
                                    className="Gallery"
                                    justifyContent="center" 
                                    flexdirection="column"
                                    alt="Only@Ina's"
                                    src={HomeMain}
                                    style={styles.image}
                                    />
                                    </a>
                                </Col>
                            </Row>
                            <Row className="justify-content-space-evenly">
                                <Col>
                                    <img
                                    className="Gallery"
                                    justifyContent="center" 
                                    flexdirection="column"
                                        alt="autumn calendar"
                                        src={fallCalendar}
                                        style={styles.image}
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-space-evenly">
                                <Col>
                                    <img
                                    className="Gallery"
                                    justifyContent="center" 
                                    flexdirection="column"
                                        alt="fall Hours"
                                        src={fallHours}
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
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '15px',
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
  
   