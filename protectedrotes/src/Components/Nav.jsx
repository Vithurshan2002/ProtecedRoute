import React from 'react'
import{Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className='flex justify-around bg-blue-200 h-15 items-center'>
        <h1 className='font-bold text-2xl'>Ultra</h1>
        <ul className='flex gap-x-10'>
          <Link to='/login'> Login</Link> 
          <Link to='/'> Home</Link> 
          <Link to='/setting'> Setting</Link> 
          <Link to='/logout'> Logout</Link> 
        </ul>
    </div>
  )
}

export default Nav