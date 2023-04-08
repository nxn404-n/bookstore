import React, { useState } from 'react';


function Categories() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div>
      <h2>Categories</h2>
      <button onClick={handleClick}>{status ? 'Active' : 'Inactive'}</button>
    </div>
  );
}

export default Categories;