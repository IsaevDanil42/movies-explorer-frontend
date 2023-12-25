import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/movies" element={<></>}></Route>
        <Route path="/saved-movies" element={<></>}></Route>
        <Route path="/profile" element={<></>}></Route>
        <Route path="/signin" element={<></>}></Route>
        <Route path="/signup" element={<></>}></Route>
        <Route path="*" element={<></>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
