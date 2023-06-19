import React, { useEffect, useState } from 'react';

export default function Image() {
  const [image, setImage] = useState(null);

  const fetchImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => setImage(Object.values(data)[0]));
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className='w-100 flex justify-center'>
      { image ? (
        <img
          src={ image.url }
            alt="Cat"
            className='w-100 rounded-lg object-cover'
          />
      ) : null }
    </div>
  );
}
