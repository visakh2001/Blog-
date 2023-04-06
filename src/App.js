

// import Register from "./pages/register/Register";
// import Single from "./pages/home/Single/Single";
// import Write from "./pages/Write/Write";
// import Settings from "./pages/settings/Settings";

import { BrowserRouter , Router, Switch, Route, Link} from "react-router-dom";
import {Routes} from 'react-router-dom'; 
import React from "react";     


import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import Write from "./pages/Write/Write"
import Settings from "./pages/settings/Settings"
import Single from "./pages/Single/Single"


function App() {
  const user = false;
  return (

    <BrowserRouter>
        <TopBar/>
            <Routes>
               <Route exact path="/" element={<Home/>}> 
               </Route>

               <Route path="/register" element={user ? <Home/> : <Register/>}> 
               </Route>

               <Route path="/login" element={user ? <Home/> : <Login/>}> 
               </Route>

               <Route path="/write" element={user ? <Write/>:<Write/>}> 
               </Route>

               <Route path="/settings" element={user ? <Settings/>:<Register/>}> 
               </Route>

               <Route path="/post/:postId" element={user ? <Single/>:<Single />}> 
               </Route>

           

               
               
             

           




            </Routes>
    </BrowserRouter>
  );
}

export default App;
