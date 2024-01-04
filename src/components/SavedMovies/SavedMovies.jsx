import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  )
}

export default SavedMovies;
