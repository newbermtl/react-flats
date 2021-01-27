import React from 'react';

const Marker = (props) => {
  const flat = props.flat;
  return (
    <div className="marker">
      <p>
        {`${flat.price} ${flat.priceCurrency}`}
      </p>
    </div>
  );
};

export default Marker;
