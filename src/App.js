import { Link } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Header from './component/Header'
=======
import Header from './Header';
>>>>>>> a631d7d1f5bc50189e37b71b84b119b49d8fa6a1

function App() {
  return (
    <div className='background'>
      <Header />
      <h1>Portfolio App</h1>
      <h2>Ichiro Yamasaki</h2>
<<<<<<< HEAD
      <h3>Network Technician</h3>
      <nav>
        <Link to="/Home">Home</Link> |{" "}
=======
      <h3>Network Engineer</h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Portfolio</Link> |{" "}
>>>>>>> a631d7d1f5bc50189e37b71b84b119b49d8fa6a1
        <Link to="/Blogs">Blogs</Link> |{" "}
        <Link to="/AboutthisApp">About this App</Link>
      </nav>
    </div>
  );
}

export default App;
