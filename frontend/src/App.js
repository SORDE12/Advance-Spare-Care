import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import AdminRoutes from "./Components/Admin_Components/AdminRoutes";
import Admin from "./Pages/Admin";


function App() {
  return (
    <div className="App">
      <Admin />
      <AdminRoutes />
    </div>
  );
}

export default App;
