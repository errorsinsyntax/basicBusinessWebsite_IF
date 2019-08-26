import React from "react";
// import { Link, withRouter } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import ifWMenu from './images/ifWMenu.jpg';
import ifLogo from './images/ifLogo.png';




class Navbar extends React.Component {
    
    handleRefresh = () => {
      window.location.reload();
    };
    render() {
        return (                  
            <body>
              <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                  <a 
                    href="/home" 
                    class="navbar-brand" >
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
                          <button 
                              class="navbar-toggler" 
                              data-toggle="collapse" 
                              data-target="#navbarMenu" 
                          >
                                <span class="navbar-toggler-icon" >                                       
                                </span>
                          </button>
                          <div 
                            class="collapse navbar-collapse" 
                            id="navbarMenu"
                           >
                            <ul class="navbar-nav mr-auto" >
                              <li class="nav-item">
                                <a class="nav-link" 
                                    style={styles.navbar}                                             
                                    href="https://goo.gl/maps/2ydrYLowu13f6cHQ9" >
                                      3021 4th Ave, St. Paul,Va 
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" 
                                    style={styles.navbar}                                             
                                    href="/home" >
                                      Home 
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link"
                                  style={styles.navbar}
                                  href="/menu">
                                    Menu
                                </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link"
                                style={styles.navbar}
                                href="/info">
                                  Hours + info
                                </a>
                              </li>
                                <li class="nav-item">
                                  <a class="nav-link"
                                  style={styles.navbar}
                                  href="/about" >
                                    About</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link"
                                  style={styles.navbar}
                                  href="/contact" >
                                    Contact</a>
                                </li>
                              <li class="nav-item">
                                <a class="nav-link"
                                style={styles.navbar}
                                href="/events">
                                  Private Events
                                </a>
                              </li>
                              {/* <li class="nav-item">
                                <a class="nav-link"
                                style={styles.navbar}
                                href="/reservations">
                                Reservations
                                </a>
                              </li> */}
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
                                href="/privacy">
                                  Privacy Policy
                                </a>
                              </li>
                              </ul>
      </div>
              </nav>
              
              </body>
              
              
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
        flexDirection: "column",
        marginBottom: "-10px",
        marginTop: "40px",
        width: "auto",
        height:"auto",
        fontSize: "14px"                                            
      
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
