import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='background'>
      <h1>Portfolio App</h1>
      <h2>Ichiro Yamasaki</h2>
      <h3>Network Engineer</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/Blogs">Blogs</Link> |{" "}
        <Link to="/AboutthisApp">About this App</Link>
      </nav>
    </div>
  );
}

export default App;
