import React from 'react'

const Navbar = () => {
    return (
      <nav className="navbar">
          <h1>My React Blog</h1>
          <div className="links">
              <a href="/">Home</a>
              <a href="/creat">New Blog</a>
          </div>
      </nav>
    )
}

export default Navbar