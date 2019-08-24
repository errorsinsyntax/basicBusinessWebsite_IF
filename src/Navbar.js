import React from "react";
// import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ifLogo from './images/ifLogo.png';



class Navbar extends React.Component {
    
    handleRefresh = () => {
      window.location.reload();
    };
    render() {
        return (
                        <Container>
                            <Row>   
                             <Col>                      
                                <nav class="navbar navbar-expand-lg navbar-light" >
                                        <div class="Gallery" id="navbarSupportedContent">
                                          <ul class="navbar-nav mr-auto">
                                           <Col>
                                            <li class="nav-item">
                                              <a class="nav-link" 
                                                  style={styles.navbar}                                             
                                                  href="http://www.inaforbes.com/" >
                                                    Home 
                                                    <span class="sr-only">(current)</span>
                                              </a>
                                            </li>
                                            </Col>
                                            <Col>
                                            <li class="nav-item">
                                              <a 
                                                class="nav-link"  
                                                style={styles.navbar} 
                                                href="https://www.westernfronthotel.com/" >
                                                  the Western Front Hotel
                                              </a>
                                            </li>
                                            </Col>
                                            <Col>
                                        <a class="navbar-brand" href="http://www.inaforbes.com/" >
                                            <img
                                              src={ifLogo}
                                              size="tiny"
                                              style={styles.nb}                                             
                                              alt="ina+forbes"
                                              position="center"
                                              floated="cener"
                                              
                                              />
                                        </a>
                                        </Col>
                                              </ul>
                                              </div>
                                            </nav>
                                    </Col>    
                                </Row>
                        </Container>
        );
    }
}
  
  export default Navbar;
  
  const styles ={
    image: {
        padding: "2px",
        marginBottom: "-40px",
        marginTop: "-10px",
        height: "100px",
        width: "auto"
      },
      background: {
        backgroundColor: "rgb(35, 35, 35)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        alignContent: "center"
      },
      navbar: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        flexDirection: "column",
        marginBottom: "-10px",
        marginTop: "90px",
        width: "auto",
        fontSize: "16px"                                            
      
      },
      nb: {
        display: "flex",
        flexWrap: "nowrap",
        // justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom: "-40px",
        marginTop: "70px",
        marginLeft: "300px",
        marginRight: "100px",
        height: "100px",
      }
    };

