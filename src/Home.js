import React from 'react'
import Post from './Post'

const Home = ({post}) => {

  return (
   
    <main className='Home'>
      
      {
       

      post.length ? (
    
      post.map(post=>
      <Post key={post.id} post={post}/>
     )): (<p>No Post to display</p>)}
    </main>
  )
}

export default Home
