import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import SocialMedia from './component/SocialMedia';
import Greeting from './component/Greeting'
import BriefIntroduction from './component/BriefIntroduction'

function App() {
  return (
    <div className="canvas">
      <Header />
      <Greeting />
      <BriefIntroduction />
      <SocialMedia />
      </div>
  );
}

export default App;

