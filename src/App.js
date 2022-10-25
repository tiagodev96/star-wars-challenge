import Home from "./components/Home";
import People from "./components/People";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/:page" element={<Home />} />
            <Route path="/people/:id" element={<People />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
