import RefLinks from '../component/RefLinks';
import Header from '../component/Header'

export default function AboutthisApp() {
    return (
      <div className='background'>
        <Header />
        <main style={{ padding: "1rem 0" }}>
          <h2>I will list links that I reference for making thie web site.</h2>
          <RefLinks />
        </main>
        </div>
      );
}   