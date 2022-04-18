import React, { useState } from 'react';

export function Location() {
  const [location, setLocation] = useState('');

  console.log(location);

  return (
    <div>
      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>Go</button>
    </div>
  );
}
