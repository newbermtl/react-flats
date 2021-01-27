import React, { useState } from 'react';
import FlatList from './components/FlatList';
import GoogleMap from './components/GoogleMap';
import flats from './data/flats';


const App = () => {
  const [selectedFlat, setSelectedFlat] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    const flatId = event.target.innerHTML - 1;
    setSelectedFlat(flats[flatId]);
  };

  return (
    <div>
      <FlatList handleClick={handleClick} selectedFlatId={selectedFlat.id} />
      <GoogleMap flat={selectedFlat} />
    </div>
  );
};

export default App;
