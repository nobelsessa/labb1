import React, { useRef } from 'react';

function Component5() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Component5</h2>
      <input ref={inputRef} type="text" placeholder="Skriv något här" />
      <button onClick={focusInput}>Fokusera på input</button>
    </div>
  );
}

export default Component5;
