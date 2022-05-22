import SocialMedia from '../component/SocialMedia';
import '../App.css';

export default function Home() {
    return (
      <div className='background'>
      <main style={{ padding: "1rem 0" }}>
        <h2>Home page</h2>
            <h1>Hello, my name is Ichiro. </h1>
            <SocialMedia />
      </main>
      </div>
    );
  }