import React from 'react';
import ifEvents from './images/ifEvents.png';
import {Container, Col, Row} from 'react-bootstrap';

class Events extends React.Component {

    render() {
        return (
            <Container>  
                <Row>  
                    <Col>    
                        <div style={styles.center}>
                            <a href="mailto:info@inaforbes.com">         
                                <img
                                    class="Gallery"
                                    src={ifEvents}
                                    alt="info@inaforbes.com"
                                    style={styles.image}
                                />
                            </a>        
                        </div>
                    </Col>
                </Row>    
            </Container>
        )
    }

}

export default Events;

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
  