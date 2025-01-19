import {BrowserRouter, Routes, Route} from "react-router-dom"
import InputPage from "./Input.jsx";
import Analysis from "./Analysis.jsx";

function App() {
  return (
<>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<InputPage/>} />
      <Route path="/analysis" element={<Analysis/>} />
    </Routes>
</BrowserRouter>
</>
  );
}

export default App;