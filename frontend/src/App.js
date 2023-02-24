

import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";


function App() {
  
  const adminPath = window.location.pathname === "/admin" ? false : true;

  return (
    <div className="App">

      {adminPath && <Navbar />}
     
      <Admin />
      <AdminRoutes />
      <AllRoutes/>
      {adminPath && <Footer />}
    
    </div>
  );
}

export default App;
