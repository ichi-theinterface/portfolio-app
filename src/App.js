import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import SideBar from './component/sidebar';
import Main from "./component/Main";

function App() {
  return (
    <div className="frame">
      <div class="canvas">
        <Header />
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
