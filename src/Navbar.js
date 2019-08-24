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
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                          <ul class="navbar-nav mr-auto">
                                            <li class="nav-item">
                                              <a class="nav-link" 
                                                  style={styles.navbar}                                             
                                                  href="http://www.inaforbes.com/" >
                                                    Home 
                                                    <span class="sr-only">(current)</span>
                                              </a>
                                            </li>
                                            <li class="nav-item">
                                              <a 
                                                class="nav-link"  
                                                style={styles.navbar}                                             
                                                href="https://www.westernfronthotel.com/" >
                                                  the Western Front Hotel
                                              </a>
                                            </li>
                                          
                                          </ul>
                                        </div>
                                      </nav>
                                </Col>  
                                    <Col >
                                        <a class="navbar-brand" href="http://www.inaforbes.com/" >
                                            <img
                                              src={ifLogo}
                                              size="tiny"
                                              style={styles.nb}                                             
                                              stackable
                                              alt="ina+forbes"
                                              position="center"
                                              floated="cener"
                                              
                                            />
                                        </a>
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
        // padding: '0px'
      },
      navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: "-300px",
        marginTop: "10px",
        padding: '20px',
        height: "100px",
        width: "auto"      
      },
      nb: {
        width: "70px",
        // height: "300px",
        // border: "1px solid #c3c3c3",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        padding: "2px",
        marginBottom: "-40px",
        marginTop: "-10px",
        marginLeft: "400px",
        height: "100px",
        // width: "auto"
      }
    };

