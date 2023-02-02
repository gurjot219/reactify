import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BasicComponents from "./BasicComponents";
import CompDidUpdate from "./component/CompDidUpdate";
import ConstructorLC from "./component/ConstructorLC";
import Home from "./component/Home";
import HookUseEffect from "./component/HookUseEffect";
import RenderLC from "./component/RenderLC";
import ShouldCompUpdate from "./component/ShouldCompUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/basic" element={<BasicComponents />} />
          <Route path="/constructor" element={<ConstructorLC />} />
          <Route path="/render" element={<RenderLC />} />
          <Route path="/compdidupdate" element={<CompDidUpdate />} />
          <Route path="/shouldupdate" element={<ShouldCompUpdate />} />
          <Route path="/useeffect" element={<HookUseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
