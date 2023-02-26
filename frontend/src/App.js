import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin"


function App() {
  
  const adminPath = window.location.pathname === "/admin" ? false : true;

  return (
    <div className="App">
      {adminPath ? <Navbar />:<Admin/>}
      
    
      <AllRoutes />
      
      {adminPath && <Footer />}
    </div>
  );
}

export default App;