import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Components/Footer';
import Products from './Pages/productsPage/Products';


function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes/>
      
      <Footer />
  
    </div>
  );
}

export default App;
