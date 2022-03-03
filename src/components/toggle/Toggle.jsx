import React from 'react'
import './toggle.css'
import {useContext} from 'react';
import {ThemeContext} from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
const handleToggle = ()=> {
  theme.dispatch({type: 'TOGGLE'})
}
  return (
    <div className="t">
        <div className="t-icon">D</div>
        <div className="t-icon">L</div>
        <div className="t-button" onClick={handleToggle} style={{left: darkMode ? 0 : 25,
    color: darkMode && "white", transition: 'ease-in-out all 0.3s'
    }}></div>
    </div>
  )
}

export default Toggle