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
                        </Col>
                    </Row>
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