
import React, { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import './index.css'
import Nav from "./Nav";
import Header from"./Header";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Footer from "./Footer";

import {format} from "date-fns";




function App() {
  const usenavigate=useNavigate()
  
 let [post,setpost]=useState([])

 let [search,setsearch]=useState('')

 let [posttitle,setposttitle]=useState('')
 let [postbody,setpostbody]=useState('')








  useEffect(()=>{
setpost(JSON.parse(localStorage.getItem("todo")))
}, [] )
 let handledelete=(id)=>{
  let newlist=post.filter((post)=>
    post.id!==id 
  )
  setpost(newlist)
  localStorage.setItem( "todo",JSON.stringify(newlist));
 }

 let handlesubmit=()=>{

  let id1=(post.length)+1
  let date=format(new Date(),'MMMM dd,yyyy pp')
  let newpost={id:id1,title:posttitle,datatime:date,body:postbody}
  let newpost1=[...post,newpost];
  usenavigate("/")
  
setpost(newpost1);
 localStorage.setItem( "todo",JSON.stringify(newpost1))
 
 }
return (
     <div className="App">   
     
     <Header title={'Social Media App'}/>
     <Nav search={search} setsearch={setsearch}/>
    
    
<Routes>
      <Route 
        path="/" 
        element = 
            { 
              <Home post={post.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
              ((post.title).toLowerCase()).includes(search.toLowerCase()))  }/>
            }
      />
      <Route 
       path="/Post" 
       element={<NewPost 
                    posttitle={posttitle} 
                    setposttitle={setposttitle}
                    postbody={postbody}
                    setpostbody={setpostbody}
                    handlesubmit={handlesubmit} 
                
                  />}
      />  
         
       
       <Route 
          path="/Post/:id" 
          element=
            {<PostPage
              handledelete={handledelete}
              post={post}

            />}
        />

       <Route path="/About"element={<About/>}
       />

       <Route path="*" element={<Missing/>}
       /> 

    
     
    
     </Routes>
     <Footer/>

    </div>

  )
}

export default App;
