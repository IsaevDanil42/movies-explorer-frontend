class Api {
  #baseUrl
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  #onResponce(res) {
    return res.ok ? res.json() : res.json().then((errData) => Promise.reject(errData));
  }

  //Регистрация, вернет email и name
  signUp(email, password, name) {
    return fetch((`${this.#baseUrl}/signup`), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name
      })
    })
      .then(this.#onResponce)
  }

  //Авторизация, вернёт jwt токен
  signIn(email, password) {
    return fetch((`${this.#baseUrl}/signin`), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(this.#onResponce)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  }

  //Проверка токена, вернёт email и name
  checkToken(JWT) {
    return fetch((`${this.#baseUrl}/users/me`), {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JWT}`
      }
    })
      .then(this.#onResponce)
  }

  //Вернёт email и name текущего пользователя
  getUserInfo() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.#baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
      .then(this.#onResponce)
  }

  updateUserInfo(email, name) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.#baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "name": name
      })
    })
      .then(this.#onResponce)
  }

  addMovie(movie) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.#baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "country": movie.country,
        "director": movie.director,
        "duration": movie.duration,
        "year": movie.year,
        "description": movie.description,
        "image": "https://api.nomoreparties.co/" + movie.image.url,
        "trailerLink": movie.trailerLink,
        "thumbnail": "https://api.nomoreparties.co/" + movie.image.formats.thumbnail.url,
        "movieId": movie.id,
        "nameRU": movie.nameRU,
        "nameEN": movie.nameEN,
      })
    })
      .then(this.#onResponce)
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.#baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this.#onResponce)
  }

  getMovies() {
    const token = localStorage.getItem('jwt');
    return fetch(`${this.#baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this.#onResponce)
  }
}

export const api = new Api('http://localhost:3001');
