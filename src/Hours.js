import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import hours from './images/hours.jpg'

class Hours extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        <div style={styles.center}>
                            <a                                 
                                href="#info"
>
                                <img
                                class="Gallery"
                                src={hours}
                                style={styles.image}
                                alt="ina+forbesHours"
                                />
                            </a>
                        </div>
                        <br/>
                        <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default Hours;

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
}
