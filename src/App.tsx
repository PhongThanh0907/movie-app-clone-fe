import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
