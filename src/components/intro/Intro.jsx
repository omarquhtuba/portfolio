import React from 'react';
import "./intro.css";
import Me from "../../img/Me.jpeg"
const Intro = () => {
  return <div className="i">
      <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">hello, my name is</h2>
        <h1 className="i-name">Omar Alani</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Medical Doctor</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Writer</div>
          </div>
        </div>
        <div className="i-desc">
          I am a medical graduate who is interested in web develpment, i have equal love and interest for medicine and software developement.
        </div>
      </div>
      
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"/>
      </div>
  </div>;
};

export default Intro;
