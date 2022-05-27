import { Link } from "react-router-dom";
import './App.css';
import Header from './component/Header'
import Header from './Header';

function App() {
  return (
    <div className='background'>
      <Header />
      <h1>Portfolio App</h1>
      <h2>Ichiro Yamasaki</h2>
      <h3>Network Technician</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Portfolio</Link> |{" "}
        <Link to="/Blogs">Blogs</Link> |{" "}
        <Link to="/AboutthisApp">About this App</Link>
      </nav>
    </div>
  );
}

export default App;
