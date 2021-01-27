import React from 'react';

const Flat = (props) => {
  const { flat, handleClick, selectedFlatId } = props;

  return (
    <div
      className={selectedFlatId === flat.id ? "card active" : "card"}
      onClick={handleClick}
      style={
      { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})` }}
    >
      <div className="card-category">
        <p>
          {`${flat.price} ${flat.priceCurrency}`}
        </p>
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href=""> {flat.id}</a>
    </div>
  );
};

export default Flat;
