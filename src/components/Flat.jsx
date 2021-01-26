import React from 'react';

const Flat = (props) => {
  const { flat, handleClick } = props;

  return (
    <div
      onClick={handleClick}
      className="card"
      style={
      { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})` }}
    >
      <div className="card-category">
        <p>{flat.price} {flat.priceCurrency} </p>
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href=""> {flat.id}</a>
    </div>
  );
};

export default Flat;
