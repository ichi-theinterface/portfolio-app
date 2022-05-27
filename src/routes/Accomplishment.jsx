import SocialMedia from '../component/SocialMedia';
import '../App.css';
import Header from '../component/Header'

export default function Home() {
    return (
      <div className='background'>
        <Header />
      <main style={{ padding: "1rem 0" }}>
        <h2>Portfolio page</h2>
            <h1>Hello, my name is Ichiro. </h1>
            <SocialMedia />
      </main>
      </div>
    );
  }
  