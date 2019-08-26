import React from 'react';
import about from './images/about.jpg';
import { Container, Row, Col } from 'react-bootstrap';


class About extends React.Component{
    render(){
        return (
              <Container>
                <Row>
                  <Col>
                  <div style={styles.center}>
                    <a href="mailto:info@inaforbes.com">
                      <img 
                      class="Gallery"
                      src={about} 
                      alt="about ina + forbes"
                      style={styles.image}
                      />
                    </a>
                    </div>
                  </Col>
                </Row>
              </Container>
        );
    }
}
export default About;

const styles = {
    center: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
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
  
   