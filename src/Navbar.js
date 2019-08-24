import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
import ifLogo from './images/ifLogo.png';



class Navbar extends React.Component {
    
    handleRefresh = () => {
      window.location.reload();
    };
    render() {
        return (                    
                                <nav class="navbar navbar-expand-lg navbar-light bg-light"  >
                                          <ul class="navbar-nav mr-auto" alignItems="flex-end" >
                                            <li class="nav-item">
                                        <a class="navbar-brand" href="http://www.inaforbes.com/" >
                                            <img
                                              class="d-inline-block align-top"
                                              src={ifLogo}
                                              size="tiny"
                                              style={styles.navbar2}                                             
                                              alt="ina+forbes"
                                              // position="center"
                                              // floated="cener"
                                              
                                              />
                                        </a>
                                           </li>
                                            <li class="nav-item">
                                              <a class="nav-link" 
                                                  style={styles.navbar}                                             
                                                  href="http://www.inaforbes.com/" >
                                                    Home 
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
                                            <li class="nav-item">
                                              <a class="nav-link"
                                              style={styles.navbar}
                                              href="/contact" >Contact</a>
                                            </li>
                                              <a class="nav-link"
                                              style={styles.navbar}
                                              href="/about" >About</a>
                                            <li class="nav-item">
                                        </li>
                                              </ul>
                                  </nav>
          
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
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "-10px",
        marginTop: "40px",
        width: "auto",
        fontSize: "16px"                                            
      
      },
      navbar2: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "-10px",
        marginTop: "10px",
        // marginLeft: "100%",
        // marginRight: "100px",
        width: "auto",
        height: "100px",      
      },
      nb: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "-40px",
        marginTop: "70px",
        marginLeft: "300px",
        marginRight: "100px",
      },

      center: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
  
      },
    };

