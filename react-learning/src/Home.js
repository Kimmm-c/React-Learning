import React from 'react'

const Home = () => {

    const handleCLick = () => {
        console.log("button has been clicked");
    }

  return (
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={ handleCLick }>Click here</button>
    </div>
  )
}

export default Home;