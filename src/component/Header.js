import React from 'react';
import header from '../App.css';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
      <Link to="/Home">
     <button type="button">
          Home
     </button>
     </Link>
     <Link to="/Blogs">
     <button type="button">
          Blogs
     </button>
     </Link>
     <Link to="/AboutthisApp">
     <button type="button">
          About this app
     </button>
     </Link>
    </div>
  );

  export default Header;