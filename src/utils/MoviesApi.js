class MoviesApi {
  #baseUrl
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  #onResponce(res) {
    return res.ok ? res.json() : res.json().then((errData) => Promise.reject(errData));
  }

  getMovies() {
    return fetch((`${this.#baseUrl}/beatfilm-movies`), {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(this.#onResponce)
  }
}

export const moviesApi = new MoviesApi('https://api.nomoreparties.co/')
