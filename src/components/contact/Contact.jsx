import React,{useContext, useState} from 'react';
import './contact.css';
import Me from '../../img/Me.jpeg';
import { useRef} from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const[done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6cdygz8', 'template_ekdcqwa', formRef.current, 'user_XHnhdtIUDs3agDv7T1Sw8')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">let's discuss our project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Me} alt="" className="c-icon"/>
                      +597069634
                  </div>
                  <div className="c-info-item">
                      <img src={Me} alt="" className="c-icon"/>
                      +597069634
                  </div>
                  <div className="c-info-item">
                      <img src={Me} alt="" className="c-icon"/>
                      +597069634
                  </div>
              </div>
          </div>
          <div className="c-right">
              <div className="c-desc">
              <b>I am a medical graduate</b> who is interested 
          in web develpment, i have equal love and interest for 
          medicine and software developement.
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" className=""/>
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" className=""/>
                  <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" className=""/>
                  <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                  <button>submit</button>
                  {done && <h4> the message is sent</h4>}
              </form>
          </div>
      </div>
  </div>;
};

export default Contact;
