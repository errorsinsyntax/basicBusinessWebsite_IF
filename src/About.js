import React from 'react';
import NL819Bio from './images/NL819Bio.jpg';


class About extends React.Component{
    render(){
        return (
              <div style={styles.center}>

                   <img 
                   class="Gallery"
                   src={NL819Bio} 
                   alt="Chef T"
                   style={styles.image}

                   />
              
              </div>
        );
    }
}
export default About;

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
      flexDirection: 'row',

      
    },
    image: {
      // height: '100vh',
      minHeight: 'calc(100vh-136px)',
      // width: '100%',
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
  
   