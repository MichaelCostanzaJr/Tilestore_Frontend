import "./App.css";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to my super store!!!</h1>
      <Catalog></Catalog>
      <Footer />
    </div>
  );
}

export default App;
