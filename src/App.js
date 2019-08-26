import React, {Fragment} from 'react';
// import logo from './i+f logos.png';
import './App.css';
// import { Container, Row, Col, } from 'react-bootstrap';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import Hours from './Hours';
import Events from './Events';
import Privacy from './Privacy';


class App extends React.Component {
  render(){
  return (
    <Fragment>
          <div style={styles.nav}>
              <Navbar/>
          </div> 
            <ScrollToTop>    
                <Switch>
                  <Route exact path='/'  component={Home}/>
                  <Route exact path='/home'  component={Home}/>
                  <Route exact path='/menu'  component={Menu}/>
                  <Route exact path='/info'  component={Hours}/>
                  <Route exact path='/about'  component={About}/>
                  <Route exact path='/contact'  component={Contact}/>
                  <Route exact path='/events'  component={Events}/>
                  <Route exact path='/privacy'  component={Privacy}/>
                </Switch>
            </ScrollToTop>
    </Fragment>
   );
  }
}

export default App;

const styles = {
  topLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-evenly',
    marginLeft: '125px',
    marginRight: '125px',
  },
  bottomLine: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
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
 
  caption: {
    height: '50px',
    minHeight: 'calc(100vh-136px)',
    // width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '15px',
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    },
    footer: {
      margin: "auto auto 0 auto",
      position: 'fixed',
      zIndex: '99',
      width: '100%'

    },
    nav: {
      // position: 'fixed',
      zIndex: '99',
      width: '100%'
    }

}

 