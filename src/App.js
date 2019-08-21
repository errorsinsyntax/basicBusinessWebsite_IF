import React from 'react';
import logo from './i+f logos.png';
import './App.css';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import Flyer819 from './images/Flyer819.jpg';
import SitL from './images/SitL.png';



class App extends React.Component {
  render(){
  return (
    <Container>
      <Row className="justify-content-space-evenly">
        <Col>
          <div>
            <div className="Gallery">
              <header className="Ina_Forbes">
                <img 
                  style={styles.image}
                  src={logo} 
                  flexdirection="column"
                  className="App-logo" 
                  alt="logo" 
                  />
              </header>
                  </div>
                </div>
        </Col>   
      </Row>
              <Row className="justify-content-space-evenly">
                <Col>
                    <img
                      className="Gallery"
                      justifyContent="center" 
                      flexdirection="column"
                        alt="819"
                        src={Flyer819}
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
                        alt="SitL"
                        src={SitL}
                        style={styles.image}
                      />
                    </a>
                </Col>
              </Row>
    </Container>  
  );
  }
}

export default App;

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
    flexWrap: 'nowrap',
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
    height: '550px',
  },

}

 