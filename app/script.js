const number0fFilms = prompt('Солко фильмов вы уже посмотрели?', '');
const personalMovieDB = {
count: number0fFilms,
movies: {},
ganres: [],
privat: false
};

const a = prompt('Один из просмотренных фильмов вы уже посмотрели?', ''),
      b = prompt('На сколько оените его', ''),
      c = prompt('Один из просмотренных фильмов вы уже посмотрели?', ''),
      d = prompt('На сколько оените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
