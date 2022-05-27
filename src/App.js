import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header'
import SocialMedia from './component/SocialMedia';

function App() {
  return (
    <div className='background'>
      <Header />
      <h1>Ichiro Yamasaki</h1>
      <h2>Network Deploy Tech at AWS</h2>
      <p> I am working as network technician at AWS. 
      <br /> I came to the states in April-2017 dreaming that I start the successfull tech company one-day in sillicon valley.
      <br /> Now, my main focus is networking, devops and its automation
      </p>
      <SocialMedia />
    </div>
  );
}

export default App;
