import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import "./index.css";
import Home from "./pages/Home";
import Startproject from "./pages/Startproject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="startproject" element={<Startproject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
