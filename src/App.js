import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header'

function App() {
  return (
    <div className='background'>
      <Header />
      <h1>Portfolio App</h1>
      <h2>Ichiro Yamasaki</h2>
      <h3>Network Technician</h3>
      <nav>
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/Blogs">Blogs</Link> |{" "}
        <Link to="/AboutthisApp">About this App</Link>
      </nav>
    </div>
  );
}

export default App;
