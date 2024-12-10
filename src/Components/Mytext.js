import React from 'react';
import './Mytext.css';

const MyText = (props) => {
  // Array of texts to display
  const textItems = [
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software",
    "Restaurant Management Software"
  ];

  return (
    <div className='mytext-box'>
      <div className="text-block">
        <h6>{textItems[props.cardno - 1]}</h6>
      </div>
    </div>
  );
};

export default MyText;
