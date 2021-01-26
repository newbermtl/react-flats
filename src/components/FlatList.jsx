import React from 'react';
import Flat from './Flat';
import flats from '../data/flats';


const FlatList = (props) => {
  const renderedFlats = flats.map((flat) => {
    return <Flat flat={flat} key={flat.id} handleClick={props.handleClick} />;
  });
  return (
    <div className="flat-list">
      { renderedFlats }
    </div>
  );
};

export default FlatList;
