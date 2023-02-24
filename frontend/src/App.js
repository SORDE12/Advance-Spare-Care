

import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import AdminRoutes from "./Components/Admin_Components/AdminRoutes";
import Admin from "./Pages/Admin";
import Products from "./Pages/productsPage/Products"




function App() {
  return (
    <div className="App">
     {/* < Navbar/>
      <Admin />
      <AdminRoutes />
      <AllRoutes/>
      <Footer /> */}
      <Products/>
    </div>
  );
}

export default App;
