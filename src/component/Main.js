import React from 'react';
import Greeting from './Greeting';
import BriefIntroduction from './BriefIntroduction';
import Introduction from './Introduction';
import Experience from './Experience';
import ContactMe from './ContactMe'

const Main = () => (
    <div className="main">
      <Greeting />
      <BriefIntroduction />
      <Experience />
      <ContactMe />
    </div>
  );

  export default Main;