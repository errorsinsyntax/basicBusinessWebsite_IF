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
        <h1>Stay in the Loop!</h1>
        <h2><a href={`mailto:${this.props.email}@inaforbes.com`}>info@inaforbes.com</a></h2>
      </div>
</div>
  );
  }
}

// var Reacti  = require('react');
// var Mailto = require('react-mailto');
 
// var Componento = React.createClass({
//   render: function () {
//     return (
//       <Mailto email="j@sonbellamy.com" obfuscate={true}>
//         Email me!
//       </Mailto>
//     );
//   }
// });

// class Landing extends React.Component {

//   // add mailerlite code
//   componentDidMount() {
//     const js = `
//       function ml_webform_success_CODE() {
//         var $ = ml_jQuery || jQuery;
//         $('.ml-subscribe-form-CODE .ml-block-success').show();
//         $('.ml-subscribe-form-CODE .ml-block-form').hide();
//       };
//     `;
//     const script = document.createElement("script");
//     const scriptText = document.createTextNode(js);
//     script.appendChild(scriptText);
//     document.body.appendChild(script);

//     const script2 = document.createElement("script");
//     script2.src = "https://static.mailerlite.com/js/w/webforms.min.js?CODE";
//     document.body.appendChild(script2);
//   }

//   render() {
//     return ( <section id="signup" className="gradient-gray">
//     <div id="mlb2-CODE" className="ml-subscribe-form ml-subscribe-form-CODE">
//       <div className="ml-vertical-align-center">
//         <div className="subscribe-form ml-block-success" style={{ display: 'none' }}>
//           <div className="form-section">
//             <p>Thank you, you have successfully subscribed to our announcement list!</p>
//           </div>
//         </div>
//         <form
//           className="ml-block-form"
//           action="https://landing.mailerlite.com/webforms/submit/CODE"
//           data-id="CODE"
//           data-code="CODE"
//           method="POST"
//           target="_blank"
//         >
//           <p className="signup-title">
//             Sign up for our announcement list and we'll let you know when we launch!
//           </p>
//           <div className="subscribe-form">
//             <div className="form-section">
//               <div
//                 className="form-group ml-field-email ml-validate-required ml-validate-email"
//               >
//                 <input
//                   type="email"
//                   name="fields[email]"
//                   className="form-control signup-text"
//                   placeholder="Email address"
//                   autoComplete="email"
//                   spellCheck="false"
//                   autoCapitalize="off"
//                   autoCorrect="off"
//                 />
//                 <input type="hidden" name="ml-submit" value="1" />
//                 <button type="submit" className="primary signup-button">
//                   Subscribe
//                 </button>
//                 <button
//                   disabled
//                   style={{ display: 'none' }}
//                   type="button"
//                   className="loading"
//                 >
//                   Submitting...
//                   {/* <img
//                     src="https://static.mailerlite.com/images/rolling@2x.gif"
//                     alt="loading..."
//                     width="20"
//                     height="20"
//                     style={{ width: '20px', height: '20px' }}
//                   /> */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </d>
//   </section>);
//   }
// }

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
 