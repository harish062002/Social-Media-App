import React from "react";

import { useParams } from 'react-router-dom'
let Edit=({editposttitle,editpostbody,handleedit,seteditpostbody,seteditposttitle})=>{

let {id}=useParams();
    return(
        <main className='NewPost'>
        <h2 >Edit Post</h2>
        <form className='newPostForm'>
  
          <label htmlFor='editPostTitle'>Title</label>
          <input 
              id='editpostTitle'
              type='text' 
              required
              value={editposttitle}
              onChange={(e)=>seteditposttitle(e.target.value)}
              />
          <label htmlFor='postBody'>Post:</label>   
          <textarea 
          id='postBody'
          required
          value={editpostbody}
          onChange={(e)=>seteditpostbody(e.target.value)}        
          /> 
          
         <button onClick={()=>handleedit(id)}>Submit</button> 
         </form>
        
       
      </main>
    )
}
export default Edit;