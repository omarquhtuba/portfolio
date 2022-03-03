import React from 'react';
import './main.css'
import Me from '../../img/Me.jpeg'
const Main = () => {
  return <div className="a">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src={Me} alt="" className="a-img"/>
          </div>
      </div>
      <div className="a-right">
          <h1 className="a-title"> About me</h1>
          <p className="a-sub">Omar Quhtuba Mohammed</p>
          <p className="a-desc">I am a medical graduate who is interested 
          in web develpment, i have equal love and interest for 
          medicine and software developement. 
          </p>
          <div className="a-award">
              <img src={Me} alt="" className="a-award-img"/>
              <div className="a-award-text">
                  <h4 className="a-award-title">Medical graduated</h4>
                  <p className="a-award-desc">
                  I am a medical graduate who is interested 
          in web develpment, i have equal love and interest for 
          medicine and software developement. 
                  </p>
              </div>
          </div>
      </div>
  </div>;

};

export default Main;
