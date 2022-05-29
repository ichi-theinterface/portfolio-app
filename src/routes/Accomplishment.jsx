import SocialMedia from '../component/SocialMedia';
import '../App.css';
import Header from '../component/Header'

export default function Home() {
    return (
      <div className='background'>
        <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2>List of accomplishment</h2>
            <ol> CCNA</ol>
            <ol> CCNP</ol>
            <ol> Udemy Courses</ol>
      </main>
      </div>
    );
  }
  