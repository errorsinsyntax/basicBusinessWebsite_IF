import React, { Component, } from 'react';
// import { render } from "react-dom";
import logo from './i+f logos.png';
import './App.css';
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import Mailchimp from 'react-mailchimp-form';
import Carousel from './carousel/Carousel';


class App extends React.Component {
  render(){
  return (
    <div>
      <div className="App">
        <header className="Ina_Forbes">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Carousel/>
        <br/>
        
        <h1><a href="https://gmail.us3.list-manage.com/subscribe/post?u=4183d66f3f46f57c5e4f2684d&amp;id=bc5c0fb730" method="POST">Stay in the Loop!</a></h1>
      </div>
</div>
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
 