import React from 'react';
// import { render } from "react-dom";
import logo from './i+f logos.png';
import './App.css';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import FFF from './images/FFF.png';
import SitL from './images/SitL.png';



class App extends React.Component {
  render(){
  return (
    <Container>
      <Row className="justify-content-space-evenly">
        <Col>
          <div>
            <div className="Gallery">
              <header className="Ina_Forbes">
                <img 
                  style={styles.image}
                  src={logo} 
                  flexdirection="column"
                  className="App-logo" 
                  alt="logo" 
                  />
              </header>
                  </div>
                </div>
        </Col>   
      </Row>
              <Row className="justify-content-space-evenly">
                <Col>
                    <img
                      className="Gallery"
                      justifyContent="center" 
                      flexdirection="column"
                        alt="FFF"
                        src={FFF}
                        style={styles.image}
                      />
                </Col>
              </Row>
            <Row>
                <Col>
                    <Carousel/>
                </Col>
            </Row>
            <Row >
                <Col>
                    <a 
                        href="http://eepurl.com/gy7MFH" 
                        method="POST"
                    >
                      <img
                      className="Gallery"
                      justifyContent="center" 
                      flexdirection="column"
                        alt="SitL"
                        src={SitL}
                        style={styles.image}
                      />
                    </a>
                </Col>
              </Row>
    </Container>  
  );
  }
}


// class Email extends Component {
//   render() {
//     return (
      
//       <Mailchimp
//       action="https://gmail.us3.list-manage.com/subscribe/post?u=4183d66f3f46f57c5e4f2684d&amp;id=bc5c0fb730" method="POST"

//       fields={[
//         {
//           name: 'b_email',
//           placeholder: 'Email',
//           type: 'email',
//           required: true,
//           value: '',
//           id: 'b_email',
//           tabindex: '-1'
//         },
//         {
//           name: 'b_name',
//           placeholder: 'Full Name',
//           type: 'text',
//           required: true,
//           value: '',
//           id: 'b_name',
//           tabindex: '-1'
//         }
//       ]}
//       messages = {
//         {
//           sending: "Sending...",
//           success: "Thank you for subscribing!",
//           error: "An unexpected internal error has occured.",
//           empty: "You must write a valid e-mail.",
//           duplicate: "Too many subscribe attempts for this email address",
//           button: "Subscribe!"
//         }
//       }
//       className='SubMail'
//       />
//     )
//   }
// }

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
  title: {
    // height: '100%',
    textColor:'black',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    marginLeft: '-200px',
    marginRight: '-200px',
    minHeight: 'calc(100vh-136px)',
    width: '100%',
    marginTop: '75px',
  },
  subtitle: {
    height: '250px',
  },
  caption: {
    height: '550px',
  },

}

 