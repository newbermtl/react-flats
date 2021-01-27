import React from 'react';

const Marker = (props) => {
  const flat = props.flat;
  if (flat) {
    return (
      <div className="marker">
        <p>
          { `${flat.price} ${flat.priceCurrency}` }
        </p>
      </div>
    );
  }
  return "";
};

export default Marker;
