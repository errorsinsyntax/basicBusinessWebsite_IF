
import React, {Fragment} from 'react';
import './App.css';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import Hours from './Hours';
import Events from './Events';
import Reservations from './Reservations';
import Privacy from './Privacy';
import Mainn from './images/Mainn.jpg';


class App extends React.Component {
  render(){
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   <a 
   style={styles.nav}                                             
   href="https://www.google.com/search?q=is+it+illegal+to+not+pay+employees+in+virginia&oq=is+it+illegal+to+not+pay+employees+in+virginia&aqs=chrome..69i57.12488j0j7&sourceid=chrome&ie=UTF-8"> 
 <img
                        class="d-inline-block align-top"
                        src={Mainn}
                        size="tiny"
                        style={styles.nav}                                             
                        alt="ina+forbes illegal practices"
                        />   
                         </a>
                        </div>
   // <Fragment>
    //       <div style={styles.nav}>
    //           <Navbar/>
    //       </div> 
    //         <ScrollToTop>    
    //             <Switch>
    //               <Route exact path='/'  component={Home}/>
    //               <Route exact path='/home'  component={Home}/>
    //               <Route exact path='/menu'  component={Menu}/>
    //               <Route exact path='/info'  component={Hours}/>
    //               <Route exact path='/about'  component={About}/>
    //               <Route exact path='/contact'  component={Contact}/>
    //               <Route exact path='/events'  component={Events}/>
    //               <Route exaxct path='/reservations' component={Reservations}/>
    //               <Route exact path='/privacy'  component={Privacy}/>
    //             </Switch>
    //         </ScrollToTop>
    // </Fragment>
   );
  }
}

export default App;

const styles = {
    nav: {
      // position: 'fixed',
      zIndex: '99',
      width: '100%'
    }

}

 