import React from 'react';
import header from '../App.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
      <div className='HeaderButtonFrame'>
        <div className='HeaderButtons'>
          <Link to="/">
                 <h5 className='HeaderButtonText'>Home</h5>
          </Link>
         </div>
         <div className='HeaderButtons'>
          
         </div>
         <div className='HeaderButtons'>
          
         </div>
         <div className='HeaderButtons'>
          
         </div>
         <div className='HeaderButtons'>
          
         </div>
         <div className='HeaderButtons'>
          
         </div>
         <div className='HeaderButtons'>
          
         </div>
        <div className='HeaderButtons'>
          <Link to="/Accomplishment">
                 <h5 className='HeaderButtonText'>Accomplishment</h5>
          </Link>
         </div>
        <div className='HeaderButtons'>
          <Link to="/Blogs">
                 <h5 className='HeaderButtonText'>Blogs</h5>
           </Link>
         </div>
        <div className='HeaderButtons'>
          <Link to="/AboutthisApp">
                  <h5 className='HeaderButtonText'>About this app</h5>
          </Link>
         </div>
       </div>
    </div>
  );

  export default Header;