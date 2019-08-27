import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Res from './images/Res.jpg'

class Reservations extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <div style={styles.center}>
                           <a href="/reservations"> 
                            <img 
                                class="Gallery"
                                src={Res}
                                alt="Reservations @ ina+forbes"
                                style={styles.image}/> 
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={styles.center}>
                            <iframe src="https://tableagent.com/iframe/inaforbes/"  title="reservations" style={styles.table} width="100%" height="100%"></iframe>
                        </div> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Reservations;

const styles = {
    table : {
        border: "0 px none", 
        minWidth: "375px", 
     minHeight: "506px"
    },
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