import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Information from './components/Info/Information';
import Lounge from './components/Lounge/Lounge';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Subscribe from './components/Subscriber/Subscribe';
import Support from './components/Support/Support';
import Travellers from './components/Travellers/Travellers';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home/>
      <Search/>
      <Information/>
      <Support/>
      <Lounge/>
      <Travellers/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
