import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Container from "./container";
import Home from "./Views/Home";
import ListView from "./Views/listView";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productsList" element={<ListView/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
