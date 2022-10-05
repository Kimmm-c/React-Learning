import { useState } from 'react';

import React from 'react'

const Home = () => {

    const [name, setName] = useState('hancock');

    const handleCLick = () => {
        setName('robin');
    }

  return (
    <div className="home">
        <h2>Homepage</h2>
        <p>{ name }</p>
        <button onClick={ handleCLick }>Click here</button>
    </div>
  )
}

export default Home;