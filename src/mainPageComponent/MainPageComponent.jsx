import React from 'react';
import './MainPageStyles.css'


function MainComponent({ children }) {
  return (
    <div className="main-content">
      { children }
    </div>
  );
}

export default MainComponent;
