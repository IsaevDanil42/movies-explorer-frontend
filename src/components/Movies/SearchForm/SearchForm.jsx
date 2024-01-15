import { useEffect, useState } from "react";
import "./SearchForm.css";

function SearchForm({ searchSubmit, checkboxFilter, emptyError, oldQuery }) {
  const [checkboxState, setCheckboxState] = useState(localStorage.getItem('checkboxState') === "true");
  const [isModile, setIsModile] = useState(false);
  const [searchQuery, setSearchQuery] = useState(oldQuery || '');

  function handleSubmit(e) {
    e.preventDefault();
    searchSubmit(searchQuery.toLowerCase());
  }

  function handleChange(e) {
    setCheckboxState(e.target.checked);
    localStorage.setItem('checkboxState', e.target.checked)
    checkboxFilter(!checkboxState);
  }

  function handleResize() {
    if (window.innerWidth < 737) {
      setIsModile(true);
    } else {
      setIsModile(false);
    }
  }

  function handleChangeInput(e) {
    setSearchQuery(e.target.value);
  }

  useEffect(() => {
    handleResize();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [])

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__icon" />
        <input className="search__input" placeholder="Фильм" value={searchQuery} onChange={handleChangeInput} />
        <button className="search__button"></button>
        {!isModile &&
          <div className="search__checkbox-container">
            <input className="search__checkbox" type="checkbox" id="search-checkbox" checked={checkboxState} onChange={handleChange}></input>
            <label className="search__checkbox-text" htmlFor="search-checkbox">Короткометражки</label>
          </div>
        }
      </form>
      {emptyError && <span className="search__emptyErrror">Нужно ввести ключевое слово</span>}
      {isModile &&
        <div className="search__checkbox-container">
          <input className="search__checkbox" type="checkbox" id="search-checkbox" checked={checkboxState} onChange={handleChange}></input>
          <label className="search__checkbox-text" htmlFor="search-checkbox">Короткометражки</label>
        </div>
      }
    </section>
  )
}

export default SearchForm;
