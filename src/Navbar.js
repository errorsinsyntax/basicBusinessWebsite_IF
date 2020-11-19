import React from "react";
import ifWlogo from './images/ifWlogo.png';




class Navbar extends React.Component {
    
    handleRefresh = () => {
      window.location.reload();
    };
    render() {
        return (                  
              <nav class="navbar navbar-fixed-top navbar-expand-md navbar-dark bg-dark ">
                  <a 
                    href="/home" 
                    class="navbar-brand" 
                  >
                      <img
                        class="d-inline-block align-top"
                        src={ifWlogo}
                        size="tiny"
                        style={styles.logo}                                             
                        alt="ina+forbes"
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
                                  href="https://www.google.com/maps/place/Ina+%2B+Forbes/@36.9046415,-82.3137258,17z/data=!3m1!4b1!4m5!3m4!1s0x885aaf0e329f5439:0xf8eb710597e57bd7!8m2!3d36.9046372!4d-82.3115371" >
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
                                  href="https://www.facebook.com/events/2415172928723906/" >
                                    Harvest Social 
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
  
  const styles =
  {
      logo: {
        display: "flex",
        // flexWrap: "nowrap",
        // justifyContent: "center",
        // flexDirection: "row",
        // marginBottom: "-10px",
        // marginTop: "10px",
        // width: "auto",
        height: "100px",      
      },
    };
