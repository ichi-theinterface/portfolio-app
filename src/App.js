import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import SocialMedia from './component/SocialMedia';
import Greeting from './component/Greeting'
import BriefIntroduction from './component/BriefIntroduction'
import SideBar from './component/sidebar';

function App() {
  return (
    <div className="canvas">
      <Header />
      <SideBar />
      <Greeting />
      <BriefIntroduction />
      </div>
  );
}

export default App;

