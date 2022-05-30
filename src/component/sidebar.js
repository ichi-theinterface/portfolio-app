import React from 'react';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

const sidebar = () => (
    <div className="sidebar">
        <ul>
          <li>
            <a href="https://twitter.com/BiteChacha" target="_blank">
              <img className="img-responsive" src={twitter} alt="logo"/>
	           </a>
           </li>
          <li>
	        <a href="https://www.linkedin.com/in/ichiro-yamasaki-1692aa168/" target="_blank">
            <img className="img-responsive" src={linkedin} alt="logo"/>
	         </a>
           </li>
          <li>
	        <a href="https://github.com/ichi-theinterface" rel="noreferrer" target="_blank">
            <img className="img-responsive" src={github} alt="logo"/>
	         </a>
           </li>
      </ul>
    </div>
  );

  export default sidebar;