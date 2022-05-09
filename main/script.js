/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


'use strict';

const personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      privat: true,
      start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) 
        {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
        
    },
    remebberMyFilms: function() {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
        } else {
        console.log('Error!');
        i--;
        }         
    },
    detectPersenalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        }
        else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");}
        else if (personalMovieDB.count  > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);}
            showMyDB(personalMovieDB.privat);
        },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
        personalMovieDB.privat = false;
        } else {
        personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
            console.log('Вы ввели некорректные данные или нажали отмену');
            i--;
            } else {
            personalMovieDB.genres[i - 1] = genre;
            }
        }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    
    }
};