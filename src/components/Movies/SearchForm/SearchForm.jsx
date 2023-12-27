import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [checkboxState, setCheckboxState] = useState(true);

  function handleChange(e) {
    setCheckboxState(e.target.checked);
  }

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__icon" />
        <input className="search__input" placeholder="Фильм"/>
        <button className="search__button"></button>
        <div className="search__checkbox-container">
          <input className="search__checkbox" type="checkbox" id="search-checkbox" checked={checkboxState} onChange={handleChange}></input>
          <label className="search__checkbox-text" htmlFor="search-checkbox">Короткометражки</label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
