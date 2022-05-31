import React from 'react';
import header from '../App.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
      <div className='HeaderButtonFrame'>
        <div className='HeaderButton'>
          <Link to="/">
            <button type="button">
                 Home
            </button>
          </Link>
         </div>
        <div className='HeaderButton'>
          <Link to="/Accomplishment">
           <button type="button">
                Accomplishment
           </button>
          </Link>
         </div>
        <div className='HeaderButton'>
          <Link to="/Blogs">
            <button type="button">
                Blogs
             </button>
           </Link>
         </div>
        <div className='HeaderButton'>
          <Link to="/AboutthisApp">
            <button type="button">
                 About this app
            </button>
          </Link>
         </div>
       </div>
    </div>
  );

  export default Header;