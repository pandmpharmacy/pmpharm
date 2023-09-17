import React from 'react';
import { useNavigate } from 'react-router-dom';

function Compounding() {
  const navigate = useNavigate();

  return (
    <div>
      Compounding
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Compounding;
