import { useEffect, useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [checkboxState, setCheckboxState] = useState(true);
  const [isModile, setIsModile] = useState(false);

  function handleChange(e) {
    setCheckboxState(e.target.checked);
  }

  function handleResize() {
    if (window.innerWidth < 737) {
      setIsModile(true);
    } else {
      setIsModile(false);
    }
  }

  useEffect(() => {
    handleResize();
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__icon" />
        <input className="search__input" placeholder="Фильм" />
        <button className="search__button"></button>
        {!isModile &&
          <div className="search__checkbox-container">
            <input className="search__checkbox" type="checkbox" id="search-checkbox" checked={checkboxState} onChange={handleChange}></input>
            <label className="search__checkbox-text" htmlFor="search-checkbox">Короткометражки</label>
          </div>
        }
      </form>
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
