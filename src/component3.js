import React from 'react';

function Component3() {
  const handleButtonClick = () => {
    alert('Knappen klickades!');
  };

  return (
    <div>
      <h2>Component3</h2>
      <button onClick={handleButtonClick}>Klicka på mig</button>
    </div>
  );
}

export default Component3;
