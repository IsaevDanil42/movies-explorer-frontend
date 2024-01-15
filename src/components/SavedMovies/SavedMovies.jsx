import React, { useState } from "react";
import { api } from "../../utils/MainApi";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  const [likedMovies, setLikedMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [emptyError, setEmptyError] = useState(false);
  const [searchError, setSerchError] = useState(false);
  const [isChanged, setChange] = useState(false);

  React.useEffect(() => {
    api.getMovies()
      .then((movies) => {
        setLikedMovies(movies);
        filter(movies, localStorage.getItem('searchQuerySaved'));
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

  // function searchSubmit(searchQuery) {
  //   setSortedMovies(likedMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchQuery)));
  // }

  // function checkboxFilter(status) {
  //   if (status) {
  //     setSortedMovies(likedMovies.filter(movie => movie.duration < 40));
  //   } else {
  //     setSortedMovies(likedMovies.filter(movie => movie));
  //   }
  // }


  function searchSubmit(searchQuery) {
    setSerchError(false);
    setEmptyError(false);
    localStorage.setItem('searchQuerySaved', searchQuery);
    filter(likedMovies, searchQuery);
  }

  function filter(movies, searchQuery) {
    if (localStorage.getItem('checkboxState') === "true") {
      setSortedMovies(movies.filter((movie) => {
        return (movie.nameRU.toLowerCase().includes(searchQuery) || movie.nameEN.toLowerCase().includes(searchQuery)) && movie.duration < 40;
      }))
    } else {
      setSortedMovies(movies.filter((movie) => {
        return (movie.nameRU.toLowerCase().includes(searchQuery) || movie.nameEN.toLowerCase().includes(searchQuery))
      }))
    }
  }

  function checkboxFilter() {
    filter(likedMovies, localStorage.getItem('searchQuerySaved'));
  }

  return (
    <main className="saved-movies">
      <SearchForm searchSubmit={searchSubmit} checkboxFilter={checkboxFilter} emptyError={emptyError} oldQuery={localStorage.getItem('searchQuerySaved')}></SearchForm>
      <MoviesCardList movies={sortedMovies} limit={101} handleLike={handleLike} searchError={searchError}></MoviesCardList>
    </main>
  )
}

export default SavedMovies;
