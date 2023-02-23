import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      {/* <AllRoutes /> */}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
