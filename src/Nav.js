import React from 'react'
import { Link } from 'react-router-dom'

const nav = ({search,setsearch,handlesearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=>(e.preventDefault())}>
          <label htmlFor='search'>Search Post</label>
          <input 
              id='search'
              placeholder='Search Post'
              type="text"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
          />
          </form>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Post'>Post</Link></li>
            <li><Link to='/About'>About</Link></li>
          </ul>
      
    </nav>
  )
}

export default nav
