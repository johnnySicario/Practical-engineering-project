import './App.css';
import MainPageComp from './pages/Home/Home';
import Footer from './pages/site/Footer';
import Header from './pages/site/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPageComp/>
      {Footer}
    </div>
  );
}

export default App;
