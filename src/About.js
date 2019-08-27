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
      minHeight: 'calc(100vh-136px)',
      width: '100%',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '15px',
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    },
  }
  
   