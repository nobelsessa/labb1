import React, { useState } from 'react';

function Component1({ message }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Component1</h2>
      <p>{message}</p>
      <input
        type="text"
        placeholder="Skriv något här"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Du skrev: {inputValue}</p>
    </div>
  );
}

export default Component1;
