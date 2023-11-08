import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/container";
import Navbar from "./components/navBar";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mt-5">
        <Routing />
      </div>
    </>
  );
}

export default App;
