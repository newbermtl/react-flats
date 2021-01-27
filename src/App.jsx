import React, { useState } from 'react';
import FlatList from './components/FlatList';
import GoogleMap from './components/GoogleMap';
import flats from './data/flats';


const App = () => {
  const [selectedFlat, setSelectedFlat] = useState(flats[0]);

  const handleClick = (event) => {
    event.preventDefault();
    const flatId = event.target.innerHTML - 1;
    setSelectedFlat(flats[flatId]);

  };

  return (
    <div>
      <FlatList handleClick={handleClick} />
      <GoogleMap flat={selectedFlat} />
    </div>
  );
};

export default App;
