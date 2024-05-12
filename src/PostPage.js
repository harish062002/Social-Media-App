import React from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const PostPage = ({post,handledelete}) => {

  let {id}=useParams();

  let posts=post.find((post)=>
    (post.id).toString()===id 
  )
  return (
    
      <main className='PostPage'>
        <article className='post'>
          { posts &&
        <>
          <h2>{posts.title}</h2>
          <p className='postDate'>{posts.datatime}</p> 
          <p className='postBody'>{(posts.body).length <= 25 ? posts.body :`${(posts.body).slice(0,25)}..`}</p>
          <button onClick={()=>handledelete(posts.id)}><Link to='/' style={{color:'white',textDecoration:'none'}}>Delete Post</Link></button>
          <Link to={`/Edit/${posts.id}` }><button>Edit Post</button></Link>
        </>
    }
    { !post &&
      <>
       <h2>Post Not Found</h2>
       <p className='postDate'>Well ,that Disappointing.</p> 
       <p className='postBody'><Link to='/'>Visit our Homepage</Link></p>
       </>
    }
       </article>  
      </main>
  
  )
}

export default PostPage
