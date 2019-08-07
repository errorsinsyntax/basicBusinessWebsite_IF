import React from 'react';
// import { render } from "react-dom";
import logo from './i+f logos.png';
import './App.css';
import Carousel from './carousel/Carousel';
import { Container, Row, Col, } from 'react-bootstrap';
import FFF from './images/FFF.png';


class App extends React.Component {
  render(){
  return (
    <Container>
      <Row className="justify-content-space-evenly">
        <Col>
          <div>
            <div className="App">
              <header className="Ina_Forbes">
                <img 
                                  style={styles.image}
                                  src={logo} className="App-logo" alt="logo" />
              </header>
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
              <br/>
            <Row >
                <Col>
                    <h2><a 
                    className="App"
                    justifyContent="center" 
                    flexdirection="row"
                    href="http://eepurl.com/gy7MFH" 
                    method="POST"
                    style={styles.center}
                    >
                      Stay in the Loop!</a></h2>
                </Col>
              </Row>
            </div>
          </div>
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    // height: '100vh',
    minHeight: 'calc(100vh-136px)',
    width: '100%',
    marginTop: '75px',
  },
  title: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginLeft: '-200px',
    marginRight: '-200px',
  },
  subtitle: {
    height: '250px',
  },
  caption: {
    height: '550px',
  },

}

 