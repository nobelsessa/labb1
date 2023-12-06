import React, { useState } from 'react';

function Component2() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Component2</h2>
      <p>Räkna: {count}</p>
      <button onClick={increment}>Öka räkningen</button>
    </div>
  );
}

export default Component2;

