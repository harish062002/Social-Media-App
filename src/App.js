
import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import './index.css'
import Nav from "./Nav";
import Header from"./Header";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {format, set} from "date-fns";

import Post from "./Post";


function App() {
  
 let [post,setpost]=useState( JSON.parse(localStorage.getItem("todo")))

 let [search,setsearch]=useState('')
 let [searchresult,setsearchresult]=useState();
 let [posttitle,setposttitle]=useState('')
 let [postbody,setpostbody]=useState('')
 let handledelete=(id)=>{
  let newlist=post.filter((post)=>
    post.id!==id 
  )
  setpost(newlist)
  localStorage.setItem( "todo",JSON.stringify(newlist))
 }

 let handlesubmit=(e)=>{
  e.preventDefault()

  let id1=(post.length)+1
  let date=format(new Date(),'MMMM dd,yyyy pp')
  let newpost={id:id1,title:posttitle,datatime:date,body:postbody}
  let newpost1=[...post,newpost];
  
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
              <Home post={post.filter((post) =>  ((post.body).toLowerCase()) .includes(search.toLowerCase()) || 
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
