import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import React, { useState } from "react";
import { api } from "../../utils/MainApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [limit, setLimit] = useState();
  const [isChanged, setChange] = useState(false);
  const [rowSize, setRowSize] = useState(0);

  React.useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setSortedMovies(movies);
      })
      .catch((err) => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getMovies()
      .then((movies) => {
        setLikedMovies(movies);
      })
      .catch((err) => console.log(err))
  }, [isChanged])

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  React.useEffect(() => {
    handleResize();
  }, [])


  function handleResize() {
    if (window.innerWidth < 1160 && window.innerWidth > 737) {
      setLimit(8);
    } else if (window.innerWidth < 737) {
      setLimit(5);
    } else {
      setLimit(16);
    }
  }

  function handleAddRow() {
    if (window.innerWidth < 1160 && window.innerWidth > 737) {
      setRowSize(rowSize + 2);
    } else if (window.innerWidth < 737) {
      setRowSize(rowSize + 1);
    } else {
      setRowSize(rowSize + 4);
    }
  }

  function handleLike(movie, isSaved) {
    if (!isSaved) {
      api.addMovie(movie)
        .then(() => {
          setChange(!isChanged);
        })
        .catch((err) => console.log(err))
    } else {
      const deleteMovie = likedMovies.filter((likesMovie) => likesMovie.movieId === movie.id)
      api.deleteMovie(deleteMovie[0]._id)
        .then(() => {
          setChange(!isChanged);
        })
        .catch((err) => console.log(err))
    }
  }

  function searchSubmit(searchQuery) {
    setSortedMovies(movies.filter(movie => movie.nameRU.toLowerCase().includes(searchQuery)));
  }

  function checkboxFilter(status) {
    if(status) {
      setSortedMovies(movies.filter(movie => movie.duration < 40));
    } else {
      setSortedMovies(movies.filter(movie => movie));
    }
  }

  return (
    <main className="movies">
      <SearchForm searchSubmit={searchSubmit} checkboxFilter={checkboxFilter}></SearchForm>
      <MoviesCardList movies={sortedMovies} limit={limit + rowSize} maxLimit={limit} handleAddRow={handleAddRow} handleLike={handleLike} likedMovies={likedMovies}></MoviesCardList>
    </main>
  )
}

export default Movies;
