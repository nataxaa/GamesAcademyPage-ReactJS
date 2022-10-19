
import { FirtsPage } from './components/FirtsPage';
import { Footer } from './components/Footer';
import { FourthPage } from './components/FourthPage';
import { SecondePage } from './components/SecondPage';
import { ThirdPage } from './components/ThirdPage';
import './style/global.ts';

function App() {
  return (
    <div className="App">
      <FirtsPage/>
      <SecondePage/>
      <ThirdPage/>
      <FourthPage/>
      <Footer/>
    </div>
  );
}

export default App;
