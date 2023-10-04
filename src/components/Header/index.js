// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="image-class">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <h1 className="name-style">Image</h1>
    </div>
    <ul className="list-style">
      <li>
        <Link className="name-style" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="name-style" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="name-style" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
