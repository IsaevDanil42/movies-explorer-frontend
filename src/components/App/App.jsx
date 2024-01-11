import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { api } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn])

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const beforeAuthUrl = location.pathname;
    if (jwt) {
      api.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          navigate(beforeAuthUrl, { replace: true });
        })
        .catch((err) => console.log(err))
    }
  }, [])

  const handleLogin = function () {
    setLoggedIn(true);
  }

  const onSignOut = function () {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn}></Header>
        <Routes>
          <Route path="/" element={<Main />}
          />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
            />}
          />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onSignOut={onSignOut}
              setCurrentUser={setCurrentUser}
            />}
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
