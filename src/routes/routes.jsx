import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Post from '../components/post/post';



const Routes = () => {
   return(
       <BrowserRouter>
                <Route component = { Post }  path="/post" /> 
       </BrowserRouter>
   )
}

export default Routes;