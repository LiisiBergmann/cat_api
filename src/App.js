import Header from './components/Header';
import Image from './components/Image';
import Fact from './components/Fact'
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-1/2 flex flex-col gap-5'>
      <Header />
      <Image />
      <Fact />
      <Footer />
    </div>
  );
}

export default App;
