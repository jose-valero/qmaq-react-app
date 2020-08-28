import React from 'react';
import '../../assets/styles/loading.css';

const Spinner = (props) => {
  return (
    <div className="center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
