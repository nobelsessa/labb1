import React, { useEffect, useState } from 'react';

function Component4() {
  const [message, setMessage] = useState('');
  const [effectHasRun, setEffectHasRun] = useState(false);

  useEffect(() => {
    if (!effectHasRun) {
      setMessage('Effektkoden har körts!');
      setEffectHasRun(true);
    }
  }, [effectHasRun]);

  return (
    <div>
      <h2>Component4</h2>
      <p>{message}</p>
    </div>
  );
}

export default Component4;
