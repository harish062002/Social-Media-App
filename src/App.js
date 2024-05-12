
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
import Edit  from "./Edit";
import {format} from "date-fns";




function App() {
const usenavigate=useNavigate()
  
let [post,setpost]=useState( 
 []
    //  [
    //   {
    //     id:2,
    //     title:"My first post",
    //     datatime:"8:00",
    //     body:"Placed in Tcs"
    //   },
    //   {
    //     id:2,
    //     title:"My first post",
    //     datatime:"8:00",
    //     body:"Placed in Tcs"
    //   }
  
    // ]
  
  
)

let [search,setsearch]=useState('')
let [posttitle,setposttitle]=useState('')
let [postbody,setpostbody]=useState('')
let [editposttitle,seteditposttitle]=useState('')
let [editpostbody,seteditpostbody]=useState('')

useEffect(()=>{
JSON.parse(localStorage.getItem("todo"))
}, [post] )

 let handledelete=(id)=>{
  let newlist=post.filter((post)=>
    post.id!==id 
  )
  setpost(newlist)
  localStorage.setItem( "todo",JSON.stringify(newlist));
  usenavigate("/")
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

 let handleedit=(id)=>{

    let f =post.find((post)=> post.id.toString()===id)
    console.log(f);
    f.datatime=format(new Date(),'MMMM dd,yyyy pp')
    f.title=editposttitle;
    f.body=editpostbody;
    console.log(f);
    let x=id-1;
    post[x]=f;
    localStorage.setItem("todo",JSON.stringify(post))
    usenavigate('/')

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
              seteditposttitle={seteditposttitle} 
              seteditpostbody={seteditpostbody}
            />}
        />
       <Route path="/Edit/:id" element={
            <Edit
                seteditposttitle={seteditposttitle} 
                seteditpostbody={seteditpostbody}
                editposttitle={editposttitle}
                editpostbody={editpostbody}
                handleedit={handleedit}
            />}/>
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

// import React, { useEffect, useState } from "react";

// import { Route, Routes, useNavigate } from "react-router-dom";

// import Home from "./Home";
// import './index.css'
// import Nav from "./Nav";
// import Header from"./Header";
// import About from "./About";
// import NewPost from "./NewPost";
// import PostPage from "./PostPage";
// import Missing from "./Missing";
// import Footer from "./Footer";

// import {format} from "date-fns";




// function App() {
// const usenavigate=useNavigate()
  
// let [post,setpost]=useState( 
//  []
//     //  [
//     //   {
//     //     id:2,
//     //     title:"My first post",
//     //     datatime:"8:00",
//     //     body:"Placed in Tcs"
//     //   },
//     //   {
//     //     id:2,
//     //     title:"My first post",
//     //     datatime:"8:00",
//     //     body:"Placed in Tcs"
//     //   }
  
//     // ]
  
  
// )

// let [search,setsearch]=useState('')
// let [posttitle,setposttitle]=useState('')
// let [postbody,setpostbody]=useState('')



// useEffect(()=>{

// JSON.parse(localStorage.getItem("todo"))
// }, [post] )

//  let handledelete=(id)=>{
//   let newlist=post.filter((post)=>
//     post.id!==id 
//   )
//   setpost(newlist)
//   localStorage.setItem( "todo",JSON.stringify(newlist));
//  }


//  let handlesubmit=()=>{

//   let id1=(post.length)+1
//   let date=format(new Date(),'MMMM dd,yyyy pp')
//   let newpost={id:id1,title:posttitle,datatime:date,body:postbody}
//   let newpost1=[...post,newpost];
//   usenavigate("/")
  
// setpost(newpost1);
//  localStorage.setItem( "todo",JSON.stringify(newpost1))
 
//  }

// return (
//      <div className="App">   
     
//      <Header title={'Social Media App'}/>
//      <Nav search={search} setsearch={setsearch}/>
    
    
// <Routes>
//       <Route 
//         path="/" 
//         element = 
//             { 
//               <Home post={post.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
//               ((post.title).toLowerCase()).includes(search.toLowerCase()))  }/>
//             }
//       />
//       <Route 
//        path="/Post" 
//        element={<NewPost 
//                     posttitle={posttitle} 
//                     setposttitle={setposttitle}
//                     postbody={postbody}
//                     setpostbody={setpostbody}
//                     handlesubmit={handlesubmit} 
                
//                   />}
//       />  
         
       
//        <Route 
//           path="/Post/:id" 
//           element=
//             {<PostPage
//               handledelete={handledelete}
//               post={post}

//             />}
//         />

//        <Route path="/About"element={<About/>}
//        />

//        <Route path="*" element={<Missing/>}
//        /> 

    
     
    
// </Routes>
//      <Footer/>

//     </div>

//   )
// }

// export default App;
