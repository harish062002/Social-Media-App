import React from 'react'
import { Link } from 'react-router-dom'

const NewPost = ({posttitle,setposttitle,postbody,setpostbody,handlesubmit,handlepost}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm'>

        <label htmlFor='PostTitle'>Title</label>
        <input 
            id='postTitle'
            type='text' 
            required
            // value={posttitle}
            onChange={(e)=>setposttitle(e.target.value)}
            />
        <label htmlFor='postBody'>Post:</label>   
        <textarea 
        id='postBody'
        // value={postbody}
        onChange={(e)=>setpostbody(e.target.value)}        
        /> 
        
       <button onClick={handlesubmit} ><Link to='/' style={{color:'black',textDecoration:'none'}}>Submit</Link></button> 
       </form>
      
     
    </main>
    
  )
}

export default NewPost
