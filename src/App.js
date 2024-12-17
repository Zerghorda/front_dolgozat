import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Public from "./Pages/Public";
import Admin from "./Pages/Admin";
import NoPages from "./Pages/Nopages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Receptek</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
