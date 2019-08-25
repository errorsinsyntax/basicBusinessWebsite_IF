import React from 'react';
import ifEvents from './images/ifEvents.png';
import {Container, Col, Row} from 'react-bootstrap';

class Contact extends React.Component {

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

export default Contact;

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
  