import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Cinemas from "./pages/ListCinemas";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Information from "./pages/Movie/Information";
import SignUp from "./pages/Register";
import HomeShowTimes from "./pages/ShowTimes";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="/lich-chieu-theo-phim" element={<HomeShowTimes />} />
          <Route path="/he-thong-rap" element={<Cinemas />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<SignUp />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movie/id" element={<Information />} />
          <Route path="/movie/id/detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
