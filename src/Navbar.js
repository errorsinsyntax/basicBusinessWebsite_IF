import React from "react";
import ifWlogo from './images/ifWlogo.png';




class Navbar extends React.Component {
    
    handleRefresh = () => {
      window.location.reload();
    };
    render() {
        return (                  
              <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                  <a 
                    href="/home" 
                    class="navbar-brand" 
                  >
                      <img
                        class="d-inline-block align-top"
                        src={ifWlogo}
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
                              <a class="nav-link active" 
                                  style={styles.navbar}                                             
                                  href="https://goo.gl/maps/2ydrYLowu13f6cHQ9" >
                                    3021 4th Ave, St. Paul,Va 
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active" 
                                  style={styles.navbar}                                             
                                  href="/home" >
                                    Home 
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                                style={styles.navbar}
                                href="/menu">
                                  Menu
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/info">
                                Hours + info
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/about" >
                                About</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/contact" >
                                Contact</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/events">
                                Private Events
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/reservations">
                              Reservations
                              </a>
                            </li> 
                            <li class="nav-item">
                              <a 
                                class="nav-link active"  
                                style={styles.navbar} 
                                href="https://www.westernfronthotel.com/" >
                                  the Western Front Hotel
                              </a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active"
                              style={styles.navbar}
                              href="/privacy">
                                Privacy Policy
                              </a>
                            </li>
                         </ul>
                       </div>
              </nav>
              
            
              
              
        );
    }
}
  
  export default Navbar;
  
  const styles ={
      navbar: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "-10px",
        marginTop: "40px",
        width: "auto",
        height:"auto",
        fontSize: "14px",
      },
      navbar2: {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "-10px",
        marginTop: "10px",
        width: "auto",
        height: "100px",      
      },
    };
