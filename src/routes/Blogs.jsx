import Header from '../component/Header'
import { Link } from "react-router-dom";

export default function Blogs() {
    return (
      <div className='background'>
        <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2>Let's make blog page here</h2>
        <Link to="/blogpost1">First Blog Post</Link>
      </main>
      </div>
    );
  }
