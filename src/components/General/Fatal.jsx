import React from 'react';
import '../../assets/styles/fatal.css';

const Fatal = (props) => {
  return (
    <div>
      <h1 className="center"> {props.mensaje} </h1>
      {/* <h2> {error.message} </h2> */}
    </div>
  );
};

export default Fatal;
