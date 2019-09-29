import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return <>
       <nav>
          <ul className='text-center a2'>
              <div className='row justify-content-center '>

                  <Link to='/'>   <button className='btn btn-sm btn-outline-success a1'>Home</button> </Link>



                  <Link to='/about'>  <button className='btn btn-sm btn-outline-success a1'> About</button> </Link>



                  <Link to ='/article'>    <button className='btn btn-sm btn-outline-success a1'>Articles</button></Link>



                  <Link to='/articlelist'>    <button className='btn btn-sm  btn-outline-success a1'>Article List</button></Link>

              </div>

          </ul>
             
       </nav>
        </>
}
export default NavBar;
