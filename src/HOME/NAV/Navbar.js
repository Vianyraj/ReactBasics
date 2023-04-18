import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
console.log(props.name);
  return (
    <div>
      <li>
        <Link to='/'>Click to Home</Link>
        </li>
        <li>
        <Link to='about'>click to about</Link>
      </li>
    </div>
  )
}

export default Navbar
