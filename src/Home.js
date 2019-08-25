import React from 'react';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import ifGOhp from './images/ifGOhp.jpg';
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
                                        alt="GrandOpeningEvent"
                                        src={ifGOhp}
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
    center: {
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      // height: '100vh',
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '15px',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    },
    title: {
      // height: '100%',
      textColor:'black',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: '-200px',
      marginRight: '-200px',
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      marginTop: '75px',
    },
    subtitle: {
      height: '250px',
    },
    caption: {
      height: '50px',
      minHeight: 'calc(100vh-136px)',
      // width: '100%',
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
      footer: {
        margin: "auto auto 0 auto",
        position: 'fixed',
        zIndex: '99',
        width: '100%'
  
      },
      nav: {
        // position: 'fixed',
        zIndex: '99',
        width: '100%'
      }
  
  }
  
   