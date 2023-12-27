import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/saved-movies" element={<SavedMovies/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/signin" element={<></>}></Route>
        <Route path="/signup" element={<></>}></Route>
        <Route path="*" element={<></>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
