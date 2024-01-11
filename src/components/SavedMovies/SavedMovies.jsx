import React, { useState } from "react";
import { api } from "../../utils/MainApi";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  const [likedMovies, setLikedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isChanged, setChange] = useState(false);

  React.useEffect(() => {
    api.getMovies()
      .then((movies) => {
        setLikedMovies(movies);
        setSortedMovies(movies);
      })
      .catch((err) => console.log(err))
  }, [isChanged])

  function handleLike(movie) {
    api.deleteMovie(movie._id)
      .then(() => {
        setChange(!isChanged);
      })
      .catch((err) => console.log(err))
  }

  function searchSubmit(searchQuery) {
    setSortedMovies(likedMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchQuery)));
  }

  function checkboxFilter(status) {
    if (status) {
      setSortedMovies(likedMovies.filter(movie => movie.duration < 40));
    } else {
      setSortedMovies(likedMovies.filter(movie => movie));
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm searchSubmit={searchSubmit} checkboxFilter={checkboxFilter}></SearchForm>
      <MoviesCardList movies={sortedMovies} limit={101} handleLike={handleLike}></MoviesCardList>
    </main>
  )
}

export default SavedMovies;
