import React from 'react';
import menuFall19 from './images/menuFall19.jpg';
import { Container, Row, Col} from 'react-bootstrap';


class Menu extends React.Component {
    render () {
        return (
                <Container>
                    <Row>
                        <Col>
                            <div style={styles.center}>
                                <a class="Gallery"
                                    href="#menu"
                                    alt="ina+forbesFall2019Menu">
                                    <img 
                                    src={menuFall19}
                                    alt="ina+forbesFall2019Menu"
                                    style={styles.image}
                                    />    
                                    </a>
                                    </div>
                                    <br/>
                                    <a 
                                        class="link"
                                        style={styles.center2}
                                        href="/reservations" > Make A Reservation Today!</a>
                                        <br/>
                                        <br/>
                        </Col>
                    </Row>
                    <br/>
                </Container>
        )
    }
}


export default Menu;

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
      },
    center2: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        fontSize: "30px",
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