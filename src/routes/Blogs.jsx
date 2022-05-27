<<<<<<< HEAD
import Header from '../component/Header'
=======
import { Link } from "react-router-dom";
>>>>>>> a631d7d1f5bc50189e37b71b84b119b49d8fa6a1

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
