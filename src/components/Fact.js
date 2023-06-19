import React, { useEffect, useState } from 'react';

export default function Fact() {
  const [fact, setFact] = useState(null);

  const fetchFact = () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => setFact(data.fact));
  }

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='text-justify' >
        { fact ? fact : null }
      </div>
    </div>
  );
}
