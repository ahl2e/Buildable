import React from 'react';
import { Link } from 'react-router-dom';

const StepsIndexItem = ({steps}) => {
  return(
    <li>
      <h3>Step{steps.order_number}: {steps.heading}</h3>
      <p>{steps.body}</p>
    </li>
);
};

export default StepsIndexItem;
