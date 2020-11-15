import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Skills extends React.Component {
    render() {
        return (
            <Container >
                <Row style={styles.title}>
                    <p>$killz</p>
                </Row>
                <Row style={styles.text}>
                    <Col>
                        <p>Front End</p>
                    </Col>
                    <Col>
                    <p>Bacc End</p>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Skills;

const styles = {
    title: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        // marginBottom: "50px",
        marginTop: "50px",
        width: "auto",
        height: "auto",
        fontSize: "50px",
    },

    text: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        // marginBottom: "50px",
        marginTop: "50px",
        width: "auto",
        height: "auto",
        fontSize: "30px"
    }
}