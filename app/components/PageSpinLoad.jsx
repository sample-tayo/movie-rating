import React from "react";
import "../styles/roller.css";

const PageSpinLoad = () => {
  return (
    <div className='flex items-center justify-center mx-auto h-60'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageSpinLoad;
