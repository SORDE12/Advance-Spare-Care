

import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import AdminRoutes from "./Components/Admin_Components/AdminRoutes";
import Admin from "./Pages/Admin";




function App() {
  
  const adminPath = window.location.pathname === "/admin" ? false : true;

  return (
    <div className="App">
      {adminPath && <Navbar />}
      {adminPath && <Footer />}
      <Admin />
      <AdminRoutes />
      
    </div>
  );
}

export default App;
