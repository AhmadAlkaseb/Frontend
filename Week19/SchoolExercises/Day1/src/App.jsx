import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate, NavLink } from 'react-router-dom'
import Header from './layout/Header';
import AppLayout from './layout/AppLayout';
import PageNotFound from './page/PageNotFound';
import MainNav from './layout/MainNav';


function Posts(){
  return (
    <>
    <p>Posts</p>
    <Outlet/>
    </>
  )
}

function Post(){

  let params = useParams();
  return (
    <>
    <p>Post: {params.postId}</p>
    </>
  )
}

function App() {
  return (
    <>

    {/*Bruges til multi page websites */}
    <a href="/contact">
  <p>Contact</p>
</a>



<hr></hr>







{/*Bruges til single page websites */}
{/*Installering af react-router: npm i install react-router-dom@version */}
      <BrowserRouter>
        <Routes>
          
          <Route element={<AppLayout/>}>

          <Route index element={<Navigate to="home"/>}/>
          <Route path="/home" element={<p>Home</p>} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>About</p>} />
          
          {/* Nested routes */}
          <Route path="/posts" element={<Posts />}>
            <Route index element={<p>New Posts</p>} />
            <Route path=":postId" element={<Post/>} />
          </Route>

          {/* Fejlside */}
          <Route path="*" element={<PageNotFound/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;