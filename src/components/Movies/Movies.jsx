import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { moviesApi } from "../../utils/MoviesApi";
import React, { useState } from "react";
import { api } from "../../utils/MainApi";

function Movies() {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchError, setSerchError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [limit, setLimit] = useState();
  const [isChanged, setChange] = useState(false);
  const [rowSize, setRowSize] = useState(0);

  React.useEffect(() => {
    if (localStorage.getItem('searchQuery')) {
      searchSubmit(localStorage.getItem('searchQuery'));
    }
  }, [])

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

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
      setRowSize(rowSize + 2);
    } else {
      setRowSize(rowSize + 4);
    }
  }

  function handleLike(movie, isSaved) {
    if (!isSaved) {
      api.addMovie(movie)
        .then((movie) => {
          // setChange(!isChanged);
          setLikedMovies([...likedMovies, movie]);
        })
        .catch((err) => console.log(err))
    } else {
      let arrIndex;
      const deleteMovie = likedMovies.filter((likesMovie, index) => {
        arrIndex = index;
        return likesMovie.movieId === movie.id
      });
      api.deleteMovie(deleteMovie[0]._id)
        .then(() => {
          // setChange(!isChanged);
          likedMovies.splice(arrIndex, 1);
        })
        .catch((err) => console.log(err))
    }
  }

  function searchSubmit(searchQuery) {
    if (searchQuery) {
      setSerchError(false);
      setEmptyError(false);
      setLoading(true);
      setRowSize(0);
      localStorage.setItem('searchQuery', searchQuery);
      if (!localStorage.getItem('movies')) {
        api.getMovies()
          .then((movies) => {
            setLikedMovies(movies);
          })
          .catch(() => setSerchError(true));
        moviesApi.getMovies()
          .then((data) => {
            setMovies(data);
            localStorage.setItem('movies', JSON.stringify(data));
            return data;
          })
          .then((data) => filter(data, searchQuery))
          .catch(() => setSerchError(true))
          .finally(() => setLoading(false));
      } else {
        api.getMovies()
          .then((movies) => {
            setLikedMovies(movies);
          })
          .then(() => {
            filter(JSON.parse(localStorage.getItem('movies')), searchQuery);
            setLoading(false);
          })
          .catch(() => setSerchError(true));
      }
    } else {
      setEmptyError(true);
    }
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
    console.log(movies, localStorage.getItem('searchQuery'));
    filter(movies, localStorage.getItem('searchQuery'));
  }

  return (
    <main className="movies">
      <SearchForm searchSubmit={searchSubmit} checkboxFilter={checkboxFilter} emptyError={emptyError} oldQuery={localStorage.getItem('searchQuery')}></SearchForm>
      <MoviesCardList movies={sortedMovies} limit={limit + rowSize} maxLimit={limit} handleAddRow={handleAddRow} handleLike={handleLike} likedMovies={likedMovies} isLoading={isLoading} searchError={searchError}></MoviesCardList>
    </main>
  )
}

export default Movies;
