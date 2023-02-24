

import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin"
import AdminRoutes from "./Components/Admin_Components/AdminRoutes";

function App() {
  
  const adminPath = window.location.pathname === "/admin" ? false : true;

  return (
    <div className="App">
      {adminPath ? <Navbar />:<Admin/>}
      
      {adminPath ? <AllRoutes />: <AdminRoutes />}
      
      {adminPath && <Footer />}
    </div>
  );
}

export default App;
